"use client";

import Image from "next/image";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mediaBehavior } from "@/data/portfolio";

type MediaPlayerProps = {
  src: string;
  poster: string;
  title: string;
  portrait?: boolean;
  mediaLabel?: "video" | "ad";
};

export default function MediaPlayer({
  src,
  poster,
  title,
  portrait = false,
  mediaLabel = "video",
}: MediaPlayerProps) {
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(mediaBehavior.mutedByDefault);
  const [posterError, setPosterError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!active || !videoRef.current) return;
    videoRef.current.muted = muted;
    void videoRef.current.play().catch(() => undefined);
  }, [active, muted]);

  const toggleMute = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (videoRef.current) videoRef.current.muted = nextMuted;
  };

  return (
    <div className={`media-player${portrait ? " media-player--portrait" : ""}`}>
      {videoError ? (
        <div className="media-error" role="status">
          <strong>Preview unavailable</strong>
          <span>The video file could not be loaded on this device.</span>
          <a href={src} target="_blank" rel="noreferrer">
            Open video file
          </a>
        </div>
      ) : active ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            preload={mediaBehavior.preload}
            controls
            playsInline
            muted={muted}
            aria-label={`${title} video`}
            onError={() => setVideoError(true)}
          />
          <button
            className="media-mute"
            type="button"
            onClick={toggleMute}
            aria-label={muted ? `Unmute ${title}` : `Mute ${title}`}
          >
            {muted ? (
              <VolumeX aria-hidden="true" size={17} />
            ) : (
              <Volume2 aria-hidden="true" size={17} />
            )}
          </button>
        </>
      ) : (
        <button
          className="media-poster"
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play ${mediaLabel}: ${title}`}
        >
          {posterError ? (
            <span className="poster-fallback" aria-hidden="true">
              <strong>{title}</strong>
            </span>
          ) : (
            <Image
              src={poster}
              alt=""
              fill
              sizes={portrait ? "(max-width: 760px) 82vw, 24vw" : "(max-width: 760px) 100vw, 48vw"}
              onError={() => setPosterError(true)}
            />
          )}
          <span className="media-scrim" />
          <span className="play-button" aria-hidden="true">
            <Play size={20} fill="currentColor" />
          </span>
          <span className="media-prompt">Play {mediaLabel}</span>
        </button>
      )}
    </div>
  );
}
