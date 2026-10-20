'use client';
import React, { useEffect, useRef } from 'react';

// Muted looping preview that costs nothing until it's on screen: no autoplay
// and preload="none", so the browser only fetches the poster (src-poster.webp)
// up front. Plays when it scrolls into view, pauses when it leaves. With
// reduced motion it just shows the poster.
export const posterFor = (src) => src.replace(/\.mp4$/, '-poster.webp');

function LazyVideo({ src, poster = posterFor(src), ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver(
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
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      {...props}
    />
  );
}

export default LazyVideo;
