"use client";

import { useEffect, useRef, useState } from "react";

interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
  setVolume(volume: number): void;
  destroy(): void;
}

interface YouTubePlayerApi {
  Player: new (elementId: string, options: {
    height: number;
    width: number;
    videoId: string;
    playerVars: { autoplay: number; controls: number; loop: number; modestbranding: number; playsinline: number; rel: number };
    events: { onReady: (event: { target: YouTubePlayer }) => void };
  }) => YouTubePlayer;
}

declare global {
  interface Window {
    YT?: YouTubePlayerApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function BackgroundMusic() {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const createPlayer = () => {
    if (!window.YT || playerRef.current) return;

    playerRef.current = new window.YT.Player("portfolio-youtube-player", {
      height: 1,
      width: 1,
      videoId: "p_-50n89C5I",
      playerVars: { autoplay: 0, controls: 0, loop: 1, modestbranding: 1, playsinline: 1, rel: 0 },
      events: {
        onReady: (event) => {
          event.target.setVolume(35);
          event.target.playVideo();
          setPlaying(true);
        },
      },
    });
  };

  const loadPlayerApi = () => {
    if (window.YT) {
      createPlayer();
      return;
    }

    window.onYouTubeIframeAPIReady = createPlayer;
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  };

  const toggleMusic = () => {
    if (playing) {
      playerRef.current?.pauseVideo();
      setPlaying(false);
      return;
    }

    if (playerRef.current) {
      playerRef.current.playVideo();
      setPlaying(true);
    } else {
      loadPlayerApi();
    }
  };

  useEffect(() => () => playerRef.current?.destroy(), []);

  return (
    <>
      <div id="portfolio-youtube-player" className="portfolio-youtube-player" aria-hidden="true" />
      <button
        type="button"
        className={`music-toggle ${playing ? "is-playing" : ""}`}
        onClick={toggleMusic}
        aria-pressed={playing}
        aria-label={playing ? "Turn background music off" : "Turn background music on"}
      >
        <span aria-hidden="true">{playing ? "♫" : "♪"}</span>
        {playing ? "Music on" : "Music off"}
      </button>
    </>
  );
}
