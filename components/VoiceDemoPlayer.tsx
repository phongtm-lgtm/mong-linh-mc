"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface VoiceDemoPlayerProps {
  audioUrl?: string;
  durationInSeconds?: number;
  mcName?: string;
  avatarUrl?: string;
}

const LABELS = {
  vi: { mcName: "Giọng đọc demo", pause: "Tạm dừng", play: "Phát giọng đọc demo" },
  zh: { mcName: "配音试听", pause: "暂停", play: "播放配音试听" },
};

export default function VoiceDemoPlayer({
  audioUrl = "",
  durationInSeconds = 90, // 01:30
  mcName,
}: VoiceDemoPlayerProps) {
  const { lang } = useLanguage();
  const labels = LABELS[lang];
  const resolvedMcName = mcName ?? labels.mcName;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthOscRef = useRef<OscillatorNode | null>(null);

  // Equalizer bar initial heights (30 bars)
  const barHeights = [
    10, 16, 26, 14, 32, 20, 36, 18, 28, 38, 22, 34, 18, 28, 36, 24, 32, 18, 26, 34, 16, 24, 32, 20, 28, 36, 22, 28, 16, 10
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= durationInSeconds) {
            setIsPlaying(false);
            stopSynthAudio();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      stopSynthAudio();
    }

    return () => {
      if (interval) clearInterval(interval);
      stopSynthAudio();
    };
  }, [isPlaying, durationInSeconds]);

  const startSynthAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      synthOscRef.current = osc;
    } catch {
      // AudioContext unavailable or blocked
    }
  };

  const stopSynthAudio = () => {
    if (synthOscRef.current) {
      try {
        synthOscRef.current.stop();
        synthOscRef.current.disconnect();
      } catch {
        // ignore
      }
      synthOscRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current && audioUrl) {
        audioRef.current.pause();
      } else {
        stopSynthAudio();
      }
    } else {
      setIsPlaying(true);
      if (audioRef.current && audioUrl) {
        audioRef.current.play().catch(() => {
          startSynthAudio();
        });
      } else {
        startSynthAudio();
      }
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 14,
        padding: "8px 20px 8px 10px",
        background: "var(--bg-primary)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 9999,
        border: "1.5px solid rgba(183, 154, 203, 0.3)",
        boxShadow: "0 8px 24px rgba(183, 154, 203, 0.15)",
        width: "100%",
        maxWidth: 415,
        boxSizing: "border-box",
        animation: "fadeUp .8s ease forwards",
        animationDelay: ".85s",
        opacity: 0,
        margin: "12px 0 0",
      }}
    >
      {audioUrl && <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} />}

      {/* PLAY / PAUSE BUTTON */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? labels.pause : labels.play}
        style={{
          appearance: "none",
          border: "none",
          outline: "none",
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "var(--accent-cta)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(201, 121, 154, 0.35)",
          transition: "transform .2s ease, background .2s ease, box-shadow .2s ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(201, 121, 154, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(201, 121, 154, 0.35)";
        }}
      >
        {isPlaying ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 2 }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* WAVEFORM EQUALIZER */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2.5,
          height: 30,
          padding: "0 8px",
          overflow: "hidden",
        }}
      >
        {barHeights.map((h, i) => {
          const progressPercent = (currentTime / durationInSeconds) * 100;
          const barPercent = (i / barHeights.length) * 100;
          const isActive = barPercent <= progressPercent;

          return (
            <span
              key={i}
              style={{
                width: 2.5,
                height: `${h}px`,
                borderRadius: 2,
                background: isActive
                  ? "var(--accent-cta)"
                  : "rgba(183, 154, 203, 0.3)",
                boxShadow: isActive ? "0 0 8px rgba(201, 121, 154, 0.4)" : "none",
                transition: "height .2s ease, background .2s ease",
                animation: isPlaying ? "equalizerPulse 1.2s ease-in-out infinite alternate" : "none",
                animationDelay: `${(i % 7) * 0.14}s`,
              }}
            />
          );
        })}
      </div>

      {/* METADATA: TITLE & TIME */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          fontFamily: "'Be Vietnam Pro', sans-serif",
          flexShrink: 0,
          textAlign: "right",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: ".02em",
            whiteSpace: "nowrap",
          }}
        >
          {resolvedMcName}
        </span>
        <span
          style={{
            fontSize: 11,
            color: "var(--text-secondary)",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: ".04em",
            whiteSpace: "nowrap",
          }}
        >
          {formatTime(currentTime)} / {formatTime(durationInSeconds)}
        </span>
      </div>
    </div>
  );
}
