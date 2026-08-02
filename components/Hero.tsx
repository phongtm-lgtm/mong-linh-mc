"use client";

import { useEffect, useState } from "react";
import SocialRail from "./SocialRail";
import ScrollIndicator from "./ScrollIndicator";
import VoiceDemoPlayer from "./VoiceDemoPlayer";
import { useViewport } from "@/hooks/useViewport";
import { useLanguage } from "@/hooks/useLanguage";

const CONTENT = {
  vi: {
    eyebrow: "MC SỰ KIỆN · SONG NGỮ VIỆT – TRUNG",
    slogan: "Giữ nhịp sân khấu. Chạm vào cảm xúc.",
    usp: "MC song ngữ Việt - Trung cho gala, launch event và hội nghị thương hiệu, với nhịp dẫn ổn định, lời dẫn chỉn chu và khả năng kết nối khán giả tinh tế.",
    stats: [
      ["200+", "sự kiện"],
      ["20+", "thương hiệu"],
      ["VI - TR", "song ngữ"],
    ],
    ctaBook: "ĐẶT LỊCH MC",
    ctaShowreel: "XEM SHOWREEL",
    footnote: "Phản hồi trong 24h · Tư vấn format chương trình · Hỗ trợ brief song ngữ",
    modalLabel: "Showreel MC Mộng Linh",
    modalClose: "Đóng showreel",
    modalTitle: "Showreel 2026",
    modalDesc: "Gala · Brand launch · Hội nghị song ngữ",
  },
  zh: {
    eyebrow: "活动主持人 · 中越双语司仪",
    slogan: "掌控节奏，触动人心。",
    usp: "中越双语主持人，专注于晚宴盛典、品牌发布会与企业峰会，以沉稳的节奏把控、精准得体的措辞，细腻地连接全场观众。",
    stats: [
      ["200+", "场活动"],
      ["20+", "合作品牌"],
      ["VI - TR", "双语主持"],
    ],
    ctaBook: "预约主持人",
    ctaShowreel: "观看 SHOWREEL",
    footnote: "24小时内回复 · 协助设计节目流程 · 提供双语主持稿支持",
    modalLabel: "梦灵 MC Showreel",
    modalClose: "关闭showreel",
    modalTitle: "Showreel 2026",
    modalDesc: "晚宴盛典 · 品牌发布 · 双语峰会",
  },
} as const;

export default function Hero() {
  const { isMobile } = useViewport();
  const { lang } = useLanguage();
  const c = CONTENT[lang];
  const [showreelOpen, setShowreelOpen] = useState(false);

  useEffect(() => {
    if (!showreelOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowreelOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [showreelOpen]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        height: "100dvh",
        maxHeight: "100dvh",
        background: "var(--bg-dark)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img
        src={isMobile ? "/assets/hero-bg-purple-mobile.png" : "/assets/hero-bg-purple.png"}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: isMobile ? "center 28%" : "center",
          zIndex: 0,
        }}
      />
      {/* Soft left wash so white type stays readable on lavender mist */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background: isMobile
            ? "linear-gradient(180deg, rgba(45,28,52,.55) 0%, rgba(45,28,52,.28) 38%, rgba(45,28,52,.12) 62%, transparent 100%)"
            : "linear-gradient(90deg, rgba(45,28,52,.58) 0%, rgba(45,28,52,.32) 38%, rgba(45,28,52,.1) 58%, transparent 78%)",
        }}
      />

      {/* SIDE RAILS */}
      {!isMobile && <SocialRail />}
      {!isMobile && <ScrollIndicator />}

      {/* MAIN CONTAINER */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          paddingTop: isMobile ? 65 : 75,
          paddingBottom: isMobile ? 15 : 25,
          paddingLeft: isMobile ? 24 : 100,
          paddingRight: isMobile ? 24 : 60,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          flex: 1,
          boxSizing: "border-box",
        }}
      >
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div
          style={{
            flex: "1 1 0%",
            maxWidth: isMobile ? "100%" : 580,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            zIndex: 6,
            marginLeft: isMobile ? 0 : 80,
          }}
        >
          {/* SUBTITLE */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              letterSpacing: ".28em",
              color: "var(--accent-gold)",
              textTransform: "uppercase",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontWeight: 500,
              animation: "fadeUp .8s ease forwards",
              animationDelay: ".1s",
              opacity: 0,
            }}
          >
            <span>{c.eyebrow}</span>
          </div>

          {/* MAIN TITLE — với sparkle motif rải rác quanh chữ */}
          <div style={{ position: "relative", width: "fit-content" }}>
            <span
              aria-hidden="true"
              className="ml-hero-sparkle"
              style={{
                position: "absolute",
                top: "6%",
                right: "-6%",
                fontSize: 13,
                color: "var(--accent-gold)",
                opacity: 0.7,
                display: "inline-block",
              }}
            >
              ✦
            </span>
            <span
              aria-hidden="true"
              className="ml-hero-sparkle"
              style={{
                position: "absolute",
                bottom: "10%",
                left: "-3%",
                fontSize: 9,
                color: "var(--accent-soft)",
                opacity: 0.65,
                display: "inline-block",
                animationDirection: "reverse",
                animationDuration: "12s",
              }}
            >
              ✦
            </span>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: "clamp(40px, 5.4vw, 80px)",
                color: "var(--bg-primary)",
                lineHeight: 1,
                margin: 0,
                letterSpacing: "-0.015em",
                animation: "fadeUp .8s ease forwards",
                animationDelay: ".25s",
                opacity: 0,
              }}
            >
              Mộng Linh
            </h1>
          </div>

          {/* SCRIPT SLOGAN (SINGLE LINE) */}
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "fit-content",
              maxWidth: "100%",
              animation: "fadeUp .8s ease forwards",
              animationDelay: ".4s",
              opacity: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 400,
                fontSize: "clamp(22px, 2.4vw, 30px)",
                color: "var(--accent-cta)",
                letterSpacing: ".01em",
                whiteSpace: "nowrap",
                display: "block",
              }}
            >
              {c.slogan}
            </span>
            <svg
              width="320"
              height="16"
              viewBox="0 0 320 16"
              fill="none"
              style={{ display: "block", marginTop: -2, maxWidth: "100%" }}
            >
              <path
                d="M3 10 Q 84 2, 160 10 T 315 8"
                stroke="var(--accent-gold)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 450,
                  strokeDashoffset: 450,
                  animation: "dash 1.4s ease forwards",
                  animationDelay: ".7s",
                }}
              />
            </svg>
          </div>

          {/* USP DESCRIPTION */}
          <p
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: isMobile ? 13.5 : 15,
              fontWeight: 500,
              lineHeight: 1.72,
              color: "rgba(250,246,248,.86)",
              maxWidth: 520,
              margin: 0,
              animation: "fadeUp .8s ease forwards",
              animationDelay: ".55s",
              opacity: 0,
            }}
          >
            {c.usp}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(3, minmax(0, 1fr))" : "repeat(3, max-content)",
              gap: isMobile ? 10 : 22,
              alignItems: "start",
              maxWidth: isMobile ? "100%" : 520,
              animation: "fadeUp .8s ease forwards",
              animationDelay: ".62s",
              opacity: 0,
            }}
          >
            {c.stats.map(([value, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: isMobile ? 23 : 28,
                    lineHeight: 1,
                    fontWeight: 600,
                    color: "var(--accent-gold)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: isMobile ? 9.5 : 10.5,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "var(--text-on-dark)",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA BUTTONS ROW */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 4,
              animation: "fadeUp .8s ease forwards",
              animationDelay: ".7s",
              opacity: 0,
            }}
          >
            <a
              href="#lienhe"
              className="ml-cta-btn"
              style={{
                appearance: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                height: 48,
                background: "var(--accent-cta-strong)",
                color: "var(--bg-primary)",
                border: "none",
                borderRadius: 999,
                padding: "0 26px",
                fontSize: 12,
                letterSpacing: ".14em",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                transition: "transform .25s ease, box-shadow .25s ease, filter .25s ease",
              }}
            >
              <span>{c.ctaBook}</span>
              <span style={{ fontSize: 12, color: "var(--bg-primary)" }}>✦</span>
            </a>

            <button
              type="button"
              onClick={() => setShowreelOpen(true)}
              className="ml-outline-btn"
              style={{
                appearance: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                height: 48,
                background: "transparent",
                color: "var(--bg-primary)",
                border: "1px solid rgba(250,246,248,.55)",
                borderRadius: 999,
                padding: "0 26px",
                fontSize: 12,
                letterSpacing: ".14em",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                transition: "transform .25s ease, background .25s ease, border-color .25s ease, box-shadow .25s ease",
              }}
            >
              <span>{c.ctaShowreel}</span>
              <span style={{ fontSize: 11, color: "var(--bg-primary)" }}>▶</span>
            </button>
          </div>

          <p
            style={{
              margin: "-2px 0 0",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: isMobile ? 11.5 : 12,
              lineHeight: 1.55,
              color: "var(--text-on-dark)",
              maxWidth: 500,
              animation: "fadeUp .8s ease forwards",
              animationDelay: ".78s",
              opacity: 0,
            }}
          >
            {c.footnote}
          </p>

          {/* VOICE DEMO PLAYER */}
          <VoiceDemoPlayer />
        </div>
      </div>

      {/* MC PORTRAIT — composited into scene (glow + edge dissolve) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: isMobile ? "auto" : "160px",
          bottom: -250,
          zIndex: 4,
          pointerEvents: "none",
          height: "100%",
          width: isMobile ? "100%" : "auto",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end",
          alignItems: "flex-end",
        }}
      >

        <img
          src="/assets/hero.webp"
          alt="MC Mộng Linh"
          style={{
            position: "relative",
            zIndex: 1,
            height: isMobile ? "87vh" : "140%",
            maxHeight: "1420px",
            width: "auto",
            maxWidth: "none",
            objectFit: "contain",
            objectPosition: "bottom right",
            filter:
              "brightness(1.03) contrast(0.98) saturate(1.06) drop-shadow(0 18px 40px rgba(61,44,59,0.16))",
            WebkitMaskImage: isMobile
              ? "linear-gradient(to bottom, #000 52%, rgba(0,0,0,0.55) 78%, transparent 100%)"
              : "linear-gradient(to bottom, #000 54%, rgba(0,0,0,0.5) 80%, transparent 100%)",
            maskImage: isMobile
              ? "linear-gradient(to bottom, #000 52%, rgba(0,0,0,0.55) 78%, transparent 100%)"
              : "linear-gradient(to bottom, #000 54%, rgba(0,0,0,0.5) 80%, transparent 100%)",
            animation: "fadeUp 1s ease forwards",
            animationDelay: ".3s",
            opacity: 0,
          }}
        />
      </div>

      {showreelOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={c.modalLabel}
          onClick={() => setShowreelOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? 18 : 40,
            background: "rgba(18, 8, 20, .82)",
            backdropFilter: "blur(16px)",
            animation: "aboutReveal .25s ease forwards",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "min(1100px, 100%)",
              borderRadius: isMobile ? 14 : 18,
              overflow: "hidden",
              background: "var(--text-primary)",
              border: "1px solid rgba(250,246,248,.22)",
              boxShadow: "0 36px 120px rgba(0,0,0,.48), 0 0 0 1px rgba(201,160,92,.12)",
            }}
          >
            <button
              type="button"
              onClick={() => setShowreelOpen(false)}
              aria-label={c.modalClose}
              className="ml-lightbox-btn"
              style={{
                position: "absolute",
                top: isMobile ? 12 : 16,
                right: isMobile ? 12 : 16,
                zIndex: 2,
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "1px solid rgba(250,246,248,.28)",
                background: "rgba(61,44,59,.52)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>

            <video
              src="/showreel.mp4"
              controls
              autoPlay
              playsInline
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 9",
                background: "#000",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: isMobile ? "14px 16px" : "16px 22px",
                background: "linear-gradient(180deg, rgba(61,44,59,.96), rgba(61,44,59,.9))",
                color: "var(--bg-primary)",
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", fontWeight: 600, color: "var(--accent-gold)" }}>
                {c.modalTitle}
              </span>
              {!isMobile && (
                <span style={{ fontSize: 12.5, color: "rgba(250,246,248,.72)" }}>
                  {c.modalDesc}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
