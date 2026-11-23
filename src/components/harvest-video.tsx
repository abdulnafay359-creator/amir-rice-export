"use client";

import { useEffect, useRef, useState } from "react";

export default function HarvestVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => {});
    };

    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  }

  return (
    <>
      <div className="relative aspect-video lg:absolute lg:inset-0 lg:aspect-auto">
        <video
          id="harvest-footage"
          ref={videoRef}
          aria-label="A combine harvester working in a rice field"
          className="absolute inset-0 h-full w-full object-cover object-center lg:object-right"
          src="/videos/rice-harvest.mp4"
          poster="/images/rice-harvest-poster.webp"
          preload="none"
          playsInline
          muted
          loop
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setAvailable(false)}
        />
      </div>
      {available && (
        <button
          type="button"
          aria-controls="harvest-footage"
          onClick={togglePlayback}
          className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/50 bg-forest-950/85 px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:right-8 lg:top-auto lg:bottom-8"
        >
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
          {playing ? "Pause video" : "Play video"}
        </button>
      )}
    </>
  );
}
