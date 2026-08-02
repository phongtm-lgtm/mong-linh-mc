"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { useViewport } from "@/hooks/useViewport";

// Khung hình tĩnh cho showreel. Khi có ảnh sân khấu đẹp thì thả file vào /public
// rồi điền đường dẫn ở đây — bỏ trống thì component tự tua tới POSTER_SEEK để
// tránh frame 0 bị đen.
const POSTER_SRC = "";
const POSTER_SEEK = 1.5;

export default function Showreel() {
  const { isMobile } = useViewport();

  const [showreelPlaying, setShowreelPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // Chỉ bật chrome của player sau khi người xem đã bấm play lần đầu.
  const [showreelStarted, setShowreelStarted] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const toggleShowreel = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      // Lần đầu bấm thì bỏ frame poster, chạy lại từ đầu.
      if (!showreelStarted || video.ended) video.currentTime = 0;
      setShowreelStarted(true);
      video.play().catch(() => setShowreelPlaying(false));
    } else {
      video.pause();
    }
  };

  const onShowreelMeta = (video: HTMLVideoElement) => {
    setDuration(video.duration);
    // Không có poster thật thì tua nhẹ để khung không phải màn đen.
    if (!POSTER_SRC && !showreelStarted && video.duration > POSTER_SEEK * 2) {
      video.currentTime = POSTER_SEEK;
    }
  };

  const fmt = (secs: number) => {
    const s = Math.max(0, Math.floor(secs));
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };

  // Kéo để tua: tính vị trí từ toạ độ con trỏ trên rãnh.
  const seekToClientX = (clientX: number, rail: HTMLElement) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = rail.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  };

  const nudgeShowreel = (delta: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    video.currentTime = Math.min(duration, Math.max(0, video.currentTime + delta));
  };

  const toggleFullscreen = () => {
    const doc = document as Document & { webkitExitFullscreen?: () => void };
    if (document.fullscreenElement || isFullscreen) {
      if (document.exitFullscreen) void document.exitFullscreen().catch(() => {});
      else doc.webkitExitFullscreen?.();
      return;
    }
    const frame = frameRef.current as (HTMLDivElement & { webkitRequestFullscreen?: () => void }) | null;
    if (frame?.requestFullscreen) {
      void frame.requestFullscreen().catch(() => {});
      return;
    }
    if (frame?.webkitRequestFullscreen) {
      frame.webkitRequestFullscreen();
      return;
    }
    // iOS Safari chỉ cho phóng to chính thẻ video, không cho phóng container.
    (videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null)?.webkitEnterFullscreen?.();
  };

  useEffect(() => {
    const sync = () => {
      const doc = document as Document & { webkitFullscreenElement?: Element | null };
      setIsFullscreen(Boolean(document.fullscreenElement || doc.webkitFullscreenElement));
    };
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
    };
  }, []);

  const showreelElapsed = showreelStarted ? currentTime : 0;
  const showreelBarW = duration > 0 ? `${(showreelElapsed / duration) * 100}%` : "0%";
  const showreelTime = `${fmt(showreelElapsed)} / ${fmt(duration)}`;

  const playInset = isMobile ? 20 : 40;

  return (
    <section
      id="showreel"
      style={{
        position: "relative",
        width: "100%",
        background: "var(--text-primary)",
        fontFamily: "'Be Vietnam Pro',sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Glow nền — cùng ngôn ngữ ánh sáng với Hero */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 65% 48% at 50% 0%, rgba(183,154,203,0.22) 0%, transparent 68%), radial-gradient(ellipse 52% 42% at 86% 88%, rgba(201,121,154,0.16) 0%, transparent 72%), linear-gradient(180deg, rgba(250,246,248,.04), transparent 42%)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1320,
          margin: "0 auto",
          padding: isMobile ? "56px 24px 58px" : "88px 48px 88px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 12,
            marginBottom: isMobile ? 32 : 52,
            animation: "aboutReveal .7s ease forwards",
            opacity: 0,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 11,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--accent-gold)",
            }}
          >
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--accent-gold)" }} />
            Highlight Event
            <span aria-hidden="true" style={{ width: 28, height: 1, background: "var(--accent-gold)" }} />
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontWeight: 500,
              fontSize: "clamp(36px, 4.8vw, 64px)",
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
              color: "var(--bg-primary)",
              margin: 0,
            }}
          >
            Khoảnh khắc trên sân khấu
          </h2>
          <p
            style={{
              fontFamily: "'Great Vibes',cursive",
              fontWeight: 400,
              fontSize: "clamp(22px, 2.3vw, 32px)",
              lineHeight: 1.3,
              color: "var(--accent-cta)",
              margin: 0,
            }}
          >
            Mỗi sự kiện là một câu chuyện.
          </p>
        </div>

        <div
          ref={frameRef}
          className="ml-showreel-frame"
          style={{
            position: "relative",
            aspectRatio: "16/9",
            overflow: "hidden",
            borderRadius: 12,
            border: "1px solid rgba(250,246,248,.22)",
            background: "rgba(250,246,248,.08)",
            boxShadow: "0 34px 100px -24px rgba(0,0,0,.52), 0 0 0 1px rgba(201,160,92,.14)",
            animation: "aboutReveal .8s ease forwards",
            animationDelay: ".1s",
            opacity: 0,
          }}
        >
          <video
            ref={videoRef}
            src="/showreel.mp4"
            poster={POSTER_SRC || undefined}
            playsInline
            preload="metadata"
            onLoadedMetadata={(e) => onShowreelMeta(e.currentTarget)}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onPlay={() => setShowreelPlaying(true)}
            onPause={() => setShowreelPlaying(false)}
            onEnded={() => setShowreelPlaying(false)}
            onClick={toggleShowreel}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              cursor: "pointer",
            }}
          />

          {/* Cover trước khi phát — overlay tím + nút play gold lớn ở giữa */}
          <div
            className="ml-showreel-cover"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 18,
              background:
                "radial-gradient(ellipse at center, rgba(15,6,25,.18) 0%, rgba(15,6,25,.55) 100%)",
              opacity: showreelStarted ? 0 : 1,
              pointerEvents: showreelStarted ? "none" : "auto",
              transition: "opacity .5s cubic-bezier(.32,.72,0,1)",
            }}
          >
            <button
              onClick={toggleShowreel}
              aria-label="Phát showreel"
              className="ml-showreel-bigplay"
              style={{
                appearance: "none",
                width: isMobile ? 68 : 88,
                height: isMobile ? 68 : 88,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: "var(--accent-cta)",
                color: "#fff",
                boxShadow: "0 12px 40px rgba(201,121,154,.35), 0 0 0 10px rgba(201,121,154,.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform .35s cubic-bezier(.32,.72,0,1)",
              }}
            >
              <svg width={isMobile ? 20 : 24} height={isMobile ? 24 : 28} viewBox="0 0 12 14" style={{ marginLeft: 4 }} aria-hidden="true">
                <path d="M0 0L12 7L0 14Z" fill="currentColor" />
              </svg>
            </button>
            <span
              style={{
                fontSize: 11,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#fff",
                textShadow: "0 1px 10px rgba(0,0,0,.5)",
                pointerEvents: "none",
              }}
            >
              Xem Showreel
            </span>
          </div>

          {/* Chrome của player chỉ xuất hiện sau khi đã bấm play */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 140,
              zIndex: 1,
              pointerEvents: "none",
              background: "linear-gradient(to top, rgba(11,6,20,.55) 0%, rgba(11,6,20,.18) 45%, transparent 100%)",
              opacity: showreelStarted ? 1 : 0,
              transition: "opacity .5s cubic-bezier(.32,.72,0,1)",
            }}
          />

          <button
            onClick={toggleShowreel}
            aria-label={showreelPlaying ? "Tạm dừng showreel" : "Phát showreel"}
            className="ml-showreel-play"
            style={{
              appearance: "none",
              position: "absolute",
              left: playInset,
              bottom: playInset,
              zIndex: 3,
              width: isMobile ? 54 : 64,
              height: isMobile ? 54 : 64,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: "var(--accent-cta)",
              boxShadow: "0 6px 26px rgba(61,44,59,.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // Chỉ hiện sau khi đã bắt đầu; đang phát thì lùi đi, hover khung là hiện lại.
              opacity: showreelStarted && !showreelPlaying ? 1 : 0,
              pointerEvents: showreelStarted ? "auto" : "none",
              transition: "transform .35s cubic-bezier(.32,.72,0,1), opacity .45s cubic-bezier(.32,.72,0,1)",
            }}
          >
            {!showreelPlaying ? (
              <svg width="16" height="19" viewBox="0 0 12 14" style={{ marginLeft: 3 }} aria-hidden="true">
                <path d="M0 0L12 7L0 14Z" fill="#fff" />
              </svg>
            ) : (
              <span style={{ display: "flex", gap: 5 }}>
                <span style={{ width: 3.5, height: 16, background: "#fff" }} />
                <span style={{ width: 3.5, height: 16, background: "#fff" }} />
              </span>
            )}
          </button>

          {/* Đồng hồ + phóng to — chỉ có khi đang xem thật */}
          <div
            style={{
              position: "absolute",
              right: playInset,
              bottom: playInset + (isMobile ? 16 : 21),
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 14 : 18,
              opacity: showreelStarted ? 1 : 0,
              pointerEvents: showreelStarted ? "auto" : "none",
              transition: "opacity .5s cubic-bezier(.32,.72,0,1)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: ".12em",
                color: "rgba(255,255,255,.9)",
                textShadow: "0 1px 8px rgba(0,0,0,.5)",
                fontVariantNumeric: "tabular-nums",
                pointerEvents: "none",
              }}
            >
              {showreelTime}
            </span>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="ml-showreel-fs"
              aria-label={isFullscreen ? "Thoát toàn màn hình" : "Xem toàn màn hình"}
              style={{
                appearance: "none",
                background: "none",
                border: "none",
                padding: 4,
                margin: -4,
                cursor: "pointer",
                display: "flex",
                color: "rgba(255,255,255,.9)",
                filter: "drop-shadow(0 1px 8px rgba(0,0,0,.5))",
                transition: "opacity .2s ease, transform .2s ease",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                {isFullscreen ? (
                  <path d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" />
                ) : (
                  <path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" />
                )}
              </svg>
            </button>
          </div>

          {/* Thanh tua — hairline sát mép dưới, kéo được */}
          <div
            role="slider"
            tabIndex={showreelStarted ? 0 : -1}
            aria-label="Tua showreel"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(showreelElapsed)}
            aria-valuetext={showreelTime}
            className="ml-showreel-track"
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              setSeeking(true);
              seekToClientX(e.clientX, e.currentTarget);
            }}
            onPointerMove={(e) => {
              if (seeking) seekToClientX(e.clientX, e.currentTarget);
            }}
            onPointerUp={(e) => {
              e.currentTarget.releasePointerCapture(e.pointerId);
              setSeeking(false);
            }}
            onPointerCancel={() => setSeeking(false)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") nudgeShowreel(5);
              if (e.key === "ArrowLeft") nudgeShowreel(-5);
            }}
            style={{
              position: "absolute",
              left: playInset,
              right: playInset,
              bottom: 0,
              zIndex: 3,
              // Vùng bấm cao 22px dù vạch chỉ dày 3px — kéo cho dễ trúng.
              padding: "19px 0 0",
              touchAction: "none",
              cursor: "pointer",
              opacity: showreelStarted ? 1 : 0,
              pointerEvents: showreelStarted ? "auto" : "none",
              transition: "opacity .5s cubic-bezier(.32,.72,0,1)",
            }}
          >
            <div style={{ position: "relative", height: 3, background: "rgba(255,255,255,.3)" }}>
              <div style={{ width: showreelBarW, height: "100%", background: "var(--accent-cta)" }} />
              <span
                aria-hidden="true"
                className="ml-showreel-thumb"
                style={{
                  position: "absolute",
                  left: showreelBarW,
                  top: "50%",
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "var(--accent-cta)",
                  boxShadow: "0 1px 6px rgba(0,0,0,.45)",
                  opacity: seeking ? 1 : 0,
                }}
              />
            </div>
          </div>
        </div>

        {/* Caption — chú thích của một tấm ảnh, không phải overlay trên video */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            paddingTop: isMobile ? 16 : 20,
            borderBottom: "1px solid rgba(250,246,248,.18)",
            paddingBottom: isMobile ? 14 : 18,
            fontSize: 11,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "var(--bg-primary)",
            animation: "aboutReveal .8s ease forwards",
            animationDelay: ".15s",
            opacity: 0,
          }}
        >
          <span>Showreel 2026</span>
          <span style={{ fontVariantNumeric: "tabular-nums", color: "rgba(250,246,248,.62)" }}>{fmt(duration)}</span>
        </div>
      </div>
    </section>
  );
}
