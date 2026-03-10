'use client';
import { useEffect, useRef } from 'react';

const VERT = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAG = `
  precision mediump float;

  uniform float u_time;
  uniform vec2  u_resolution;
  uniform vec2  u_mouse;
  uniform float u_bang;      /* 0..1, decays after click */
  uniform vec2  u_bangPos;   /* click position in uv space */

  /* ── noise helpers ───────────────────────────────────────── */
  float hash(vec2 p) {
    p = fract(p * vec2(234.34, 435.345));
    p += dot(p, p + 34.23);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i),                  hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = p * 2.0 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  /* ── soft metaball — returns smooth 0..1 field ──────────── */
  float blob(vec2 uv, vec2 center, float radius) {
    float d = length(uv - center);
    return smoothstep(radius, 0.0, d);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_mouse / u_resolution - 0.5) * 0.25;
    float t = u_time * 0.15;

    /* scale orbits for portrait screens */
    float aspect = u_resolution.x / u_resolution.y;
    float xs = min(aspect, 1.0);  /* 1.0 on landscape, shrinks on portrait */

    /* ── blob centers — tighter orbits so they overlap more ── */
    vec2 c1 = vec2(
      (sin(t * 0.7 + 1.0) * 0.20 - 0.15) * xs + mouse.x,
      cos(t * 0.5)       * 0.18 + 0.10 + mouse.y
    );
    vec2 c2 = vec2(
      (cos(t * 0.6 + 2.0) * 0.22) * xs - mouse.x * 0.6,
      sin(t * 0.4 + 1.5) * 0.20 - mouse.y * 0.4
    );
    vec2 c3 = vec2(
      (sin(t * 0.5 + 4.0) * 0.18) * xs + mouse.x * 0.3,
      cos(t * 0.7 + 3.0) * 0.15 - 0.10
    );

    /* noise-based distortion on each center for organic feel */
    c1 += vec2(fbm(c1 + t * 0.3), fbm(c1 + vec2(3.0) + t * 0.3)) * 0.12;
    c2 += vec2(fbm(c2 + t * 0.25), fbm(c2 + vec2(5.0) + t * 0.25)) * 0.10;
    c3 += vec2(fbm(c3 + t * 0.35), fbm(c3 + vec2(7.0) + t * 0.35)) * 0.08;

    /* bang: push blobs away from click + inflate */
    float bang = u_bang * u_bang; /* ease out */
    vec2 bangUV = u_bangPos;
    c1 += normalize(c1 - bangUV) * bang * 0.35;
    c2 += normalize(c2 - bangUV) * bang * 0.35;
    c3 += normalize(c3 - bangUV) * bang * 0.35;

    /* radii pulse gently + inflate on bang */
    float inflate = bang * 0.25;
    float r1 = 0.38 + sin(t * 0.9) * 0.06 + inflate;
    float r2 = 0.32 + sin(t * 0.7 + 1.0) * 0.05 + inflate;
    float r3 = 0.28 + sin(t * 1.1 + 2.0) * 0.04 + inflate;

    float b1 = blob(uv, c1, r1);
    float b2 = blob(uv, c2, r2);
    float b3 = blob(uv, c3, r3);

    /* ── palette ───────────────────────────────────────────── */
    vec3 deepPurple  = vec3(0.22, 0.06, 0.48);
    vec3 violet      = vec3(0.42, 0.16, 0.82);
    vec3 gold        = vec3(0.95, 0.75, 0.15);

    vec3 col = vec3(0.035, 0.035, 0.04);
    col += gold       * b1 * 0.45;
    col += violet     * b2 * 0.55;
    col += deepPurple * b3 * 0.7;

    /* add a faint glow where blobs overlap */
    float overlap = b1 * b2;
    col += vec3(0.55, 0.25, 0.95) * overlap * 0.35;
    float overlap2 = b2 * b3;
    col += vec3(0.75, 0.55, 0.25) * overlap2 * 0.20;

    /* subtle noise texture to break banding */
    col += (noise(uv * 60.0 + t) - 0.5) * 0.012;

    /* vignette */
    vec2 vig = gl_FragCoord.xy / u_resolution * 2.0 - 1.0;
    col *= 1.0 - dot(vig, vig) * 0.35;

    /* global brightness + flash on bang */
    col *= 0.75 + bang * 0.6;

    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  }
`;

function createShader(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl', {
      antialias: false,
      powerPreference: 'low-power',
    });
    if (!gl) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, createShader(gl, gl.VERTEX_SHADER,   VERT));
    gl.attachShader(prog, createShader(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc   = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime    = gl.getUniformLocation(prog, 'u_time');
    const uRes     = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse   = gl.getUniformLocation(prog, 'u_mouse');
    const uBang    = gl.getUniformLocation(prog, 'u_bang');
    const uBangPos = gl.getUniformLocation(prog, 'u_bangPos');

    let rafId;
    let time = 0;
    let lastTs = null;
    const mouse = { x: 0, y: 0 };
    const smoothMouse = { x: 0, y: 0 };
    let bang = 0;
    const bangPos = { x: 0, y: 0 };

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = canvas.height - e.clientY;
    }
    window.addEventListener('mousemove', onMouseMove);

    function onClick(e) {
      const rect = canvas.getBoundingClientRect();
      const minDim = Math.min(canvas.width, canvas.height);
      bangPos.x = (e.clientX - rect.left - canvas.width * 0.5) / minDim;
      bangPos.y = (canvas.height * 0.5 - (e.clientY - rect.top)) / minDim;
      bang = 1.0;
    }
    canvas.addEventListener('click', onClick);

    function render(ts) {
      if (lastTs === null) lastTs = ts;
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;
      time += dt;

      /* smooth mouse lerp */
      const lerpFactor = 1 - Math.pow(0.05, dt);
      smoothMouse.x += (mouse.x - smoothMouse.x) * lerpFactor;
      smoothMouse.y += (mouse.y - smoothMouse.y) * lerpFactor;

      /* decay bang */
      bang = Math.max(0, bang - dt * 1.5);

      gl.uniform1f(uTime,    time);
      gl.uniform2f(uRes,     canvas.width, canvas.height);
      gl.uniform2f(uMouse,   smoothMouse.x, smoothMouse.y);
      gl.uniform1f(uBang,    bang);
      gl.uniform2f(uBangPos, bangPos.x, bangPos.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafId = requestAnimationFrame(render);
    }
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
    />
  );
}
