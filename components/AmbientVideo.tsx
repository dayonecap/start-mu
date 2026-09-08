"use client";

import { useEffect, useRef } from "react";

/**
 * A silent, looping film that plays only while in view. No controls, no sound.
 * Falls back to the poster image while loading, on slow connections, and when motion is reduced.
 */
export function AmbientVideo({
  src,
  poster,
  label,
  aspect = 3 / 2,
}: {
  src: string;
  poster: string;
  label: string;
  aspect?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-stone-light" style={{ aspectRatio: aspect }}>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
      />
    </div>
  );
}
