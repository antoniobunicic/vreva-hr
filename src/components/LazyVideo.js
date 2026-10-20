'use client';
import React, { useEffect, useRef, useState } from 'react';

// Muted looping preview that costs nothing until it's near the screen: no
// autoplay, preload="none", and even the poster (src-poster.webp) is only set
// once the video is within ~one screen. Plays while on screen, pauses when it
// leaves. With reduced motion it just shows the poster.
export const posterFor = (src) => src.replace(/\.mp4$/, '-poster.webp');

function LazyVideo({ src, poster = posterFor(src), ...props }) {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          nearObserver.disconnect();
        }
      },
      { rootMargin: '100% 0px' }
    );
    nearObserver.observe(video);
    if (reduced) return () => nearObserver.disconnect();

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() starts the download; ignore the rejection if the browser
          // blocks it (e.g. low-power mode) — the poster stays visible
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px 0px' }
    );
    playObserver.observe(video);
    return () => {
      nearObserver.disconnect();
      playObserver.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={near ? poster : undefined}
      muted
      loop
      playsInline
      preload="none"
      {...props}
    />
  );
}

export default LazyVideo;
