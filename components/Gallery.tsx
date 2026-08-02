"use client";

import { useEffect, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionHeader from "./SectionHeader";
import { useViewport } from "@/hooks/useViewport";
import { useLanguage } from "@/hooks/useLanguage";

type StageShot = {
  id: string;
  src: string;
  title: { vi: string; zh: string };
  brand: { vi: string; zh: string };
  role: { vi: string; zh: string };
  cat: { vi: string; zh: string };
  year: string;
  orientation: "portrait" | "landscape";
  aspect: string;
  focus?: string;
  /** mosaic span: featured | tall | wide | default */
  tile: "featured" | "tall" | "wide" | "default";
};

/** Curated order — strongest social-proof shots first */
const STAGE_SHOTS: StageShot[] = [
  {
    id: "stage-1",
    src: "/media/gallery-vietnam-china.jpg",
    title: { vi: "Hội nghị kết nối Việt Nam – Trung Quốc", zh: "越中连结会议" },
    brand: { vi: "Diễn đàn Việt – Trung", zh: "越中论坛" },
    role: { vi: "MC song ngữ", zh: "双语主持" },
    cat: { vi: "Song ngữ", zh: "双语" },
    year: "2026",
    orientation: "landscape",
    aspect: "4/3",
    tile: "featured",
  },
  {
    id: "stage-2",
    src: "/media/gallery-disney-pnj.jpg",
    title: { vi: "Sự kiện thương hiệu Disney | PNJ", zh: "迪士尼 | PNJ 品牌活动" },
    brand: { vi: "Disney × PNJ", zh: "Disney × PNJ" },
    role: { vi: "MC chính", zh: "主主持" },
    cat: { vi: "Brand", zh: "品牌" },
    year: "2025",
    orientation: "portrait",
    aspect: "3/4",
    focus: "50% 12%",
    tile: "tall",
  },
  {
    id: "stage-3",
    src: "/media/gallery-gold-gown.jpg",
    title: { vi: "Không gian gala cao cấp", zh: "高端晚宴现场" },
    brand: { vi: "Luxury Gala", zh: "高端晚宴" },
    role: { vi: "MC gala", zh: "晚宴主持" },
    cat: { vi: "Luxury", zh: "尊享" },
    year: "2025",
    orientation: "portrait",
    aspect: "3/4",
    focus: "50% 15%",
    tile: "tall",
  },
  {
    id: "stage-11",
    src: "/media/stage-ethnic-mc.png",
    title: { vi: "Sân khấu song ngữ", zh: "双语主持舞台" },
    brand: { vi: "Festival văn hoá", zh: "文化节" },
    role: { vi: "MC chính", zh: "主主持" },
    cat: { vi: "Song ngữ", zh: "双语" },
    year: "2025",
    orientation: "portrait",
    aspect: "4/5",
    focus: "50% 8%",
    tile: "default",
  },
  {
    id: "stage-5",
    src: "/media/gallery-elcom-gala.jpg",
    title: { vi: "Into ELCOMverse", zh: "Into ELCOMverse" },
    brand: { vi: "ELCOM", zh: "ELCOM" },
    role: { vi: "MC chính", zh: "主主持" },
    cat: { vi: "Corporate", zh: "企业" },
    year: "2025",
    orientation: "landscape",
    aspect: "16/9",
    tile: "wide",
  },
  {
    id: "stage-7",
    src: "/media/gallery-tbm-wide.jpg",
    title: { vi: "Giao thương chuỗi cung ứng TBM", zh: "TBM供应链贸易交流会" },
    brand: { vi: "TBM", zh: "TBM" },
    role: { vi: "MC song ngữ", zh: "双语主持" },
    cat: { vi: "Song ngữ", zh: "双语" },
    year: "2026",
    orientation: "landscape",
    aspect: "16/9",
    tile: "wide",
  },
  {
    id: "stage-9",
    src: "/media/audience-energy.jpeg",
    title: { vi: "Năng lượng khán giả", zh: "全场观众能量" },
    brand: { vi: "Live stage", zh: "现场舞台" },
    role: { vi: "MC chính", zh: "主主持" },
    cat: { vi: "Entertainment", zh: "娱乐" },
    year: "2025",
    orientation: "landscape",
    aspect: "16/10",
    tile: "default",
  },
  {
    id: "stage-8",
    src: "/media/gallery-white-gown.jpg",
    title: { vi: "Sự kiện giao thương", zh: "商贸交流活动" },
    brand: { vi: "Trade Night", zh: "商贸之夜" },
    role: { vi: "MC chính", zh: "主主持" },
    cat: { vi: "Brand", zh: "品牌" },
    year: "2026",
    orientation: "portrait",
    aspect: "3/4",
    focus: "50% 15%",
    tile: "default",
  },
  {
    id: "stage-6",
    src: "/media/gallery-jotun-seminar.jpg",
    title: { vi: "Hội thảo hàng hải bền vững", zh: "可持续海事研讨会" },
    brand: { vi: "Jotun", zh: "Jotun" },
    role: { vi: "MC hội thảo", zh: "研讨会主持" },
    cat: { vi: "Corporate", zh: "企业" },
    year: "2026",
    orientation: "portrait",
    aspect: "4/5",
    focus: "50% 30%",
    tile: "default",
  },
  {
    id: "stage-4",
    src: "/media/gallery-showmeyourgu.jpg",
    title: { vi: "Show me Your GU", zh: "Show me Your GU" },
    brand: { vi: "GU", zh: "GU" },
    role: { vi: "MC chính", zh: "主主持" },
    cat: { vi: "Entertainment", zh: "娱乐" },
    year: "2025",
    orientation: "landscape",
    aspect: "16/9",
    tile: "default",
  },
  {
    id: "stage-10",
    src: "/media/luxury-gala-seated.png",
    title: { vi: "Tiệc riêng và không gian gala", zh: "私人晚宴与盛典空间" },
    brand: { vi: "Private Gala", zh: "私人晚宴" },
    role: { vi: "MC gala", zh: "晚宴主持" },
    cat: { vi: "Luxury", zh: "尊享" },
    year: "2025",
    orientation: "portrait",
    aspect: "4/5",
    focus: "50% 18%",
    tile: "default",
  },
];

const UI_LABELS = {
  vi: {
    kicker: "Gallery",
    title: "Những khoảnh khắc đáng nhớ",
    script: "Từ hội nghị song ngữ đến gala thương hiệu",
    zoom: (title: string) => `Phóng to: ${title}`,
    prev: "Ảnh trước",
    next: "Ảnh tiếp theo",
    close: "Đóng",
    cta: "Đặt lịch sự kiện tương tự",
    more: "Xem thêm",
    moreCount: (n: number) => `Xem thêm ${n} ảnh`,
  },
  zh: {
    kicker: "Gallery",
    title: "难忘的精彩瞬间",
    script: "从双语峰会到品牌盛典",
    zoom: (title: string) => `放大查看：${title}`,
    prev: "上一张",
    next: "下一张",
    close: "关闭",
    cta: "预约同类活动主持",
    more: "查看更多",
    moreCount: (n: number) => `再看 ${n} 张`,
  },
} as const;

/** First paint: featured mosaic only. Extra shots load on demand. */
const INITIAL_COUNT = 7;
const PAGE_SIZE = 4;

function GalleryTile({
  shot,
  index,
  lang,
  ui,
  isMobile,
  featured,
  priority,
  onOpen,
}: {
  shot: StageShot;
  index: number;
  lang: "vi" | "zh";
  ui: (typeof UI_LABELS)[keyof typeof UI_LABELS];
  isMobile: boolean;
  featured?: boolean;
  priority?: boolean;
  onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={ui.zoom(shot.title[lang])}
      className="ml-gallery-tile"
      style={{
        position: "relative",
        appearance: "none",
        border: "none",
        padding: 0,
        margin: 0,
        display: "block",
        width: isMobile && !featured ? 220 : "100%",
        flexShrink: isMobile && !featured ? 0 : undefined,
        height: featured ? (isMobile ? 280 : "100%") : isMobile ? 280 : "100%",
        minHeight: featured && !isMobile ? 420 : undefined,
        overflow: "hidden",
        cursor: "zoom-in",
        background: "var(--bg-dark)",
        textAlign: "left",
        animation: "aboutReveal .7s ease forwards",
        animationDelay: `${0.08 + Math.min(index, 8) * 0.04}s`,
        opacity: 0,
      }}
    >
      <div className="ml-gallery-tile-media" style={{ position: "absolute", inset: 0 }}>
        <ImagePlaceholder
          src={shot.src}
          alt={shot.title[lang]}
          fit="cover"
          priority={priority}
          sizes={featured ? "(max-width: 760px) 100vw, 70vw" : "(max-width: 760px) 70vw, 30vw"}
          style={{ objectPosition: shot.focus ?? (shot.orientation === "portrait" ? "50% 18%" : "50% 50%") }}
          className="ml-img-grade"
        />
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: featured
            ? "linear-gradient(to top, rgba(28,14,24,.72) 0%, rgba(28,14,24,.18) 42%, transparent 68%)"
            : "linear-gradient(to top, rgba(28,14,24,.66) 0%, transparent 55%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          padding: featured ? (isMobile ? "16px 16px 18px" : "22px 24px 24px") : "14px 14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: featured ? 6 : 4,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Be Vietnam Pro',sans-serif",
            fontSize: featured ? 11 : 10,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--accent-gold)",
            fontWeight: 600,
          }}
        >
          {shot.brand[lang]} · {shot.year}
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: featured ? (isMobile ? 20 : 28) : isMobile ? 15 : 17,
            color: "#fff",
            lineHeight: 1.25,
            maxWidth: featured ? 480 : "100%",
          }}
        >
          {shot.title[lang]}
        </span>
        {featured && (
          <span
            style={{
              fontFamily: "'Be Vietnam Pro',sans-serif",
              fontSize: 12,
              color: "rgba(250,246,248,.72)",
              marginTop: 2,
            }}
          >
            {shot.role[lang]} · {shot.cat[lang]}
          </span>
        )}
      </div>
    </button>
  );
}

export default function Gallery() {
  const { isMobile } = useViewport();
  const { lang } = useLanguage();
  const ui = UI_LABELS[lang];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleShots = STAGE_SHOTS.slice(0, visibleCount);
  const featured = visibleShots[0];
  const sideStack = visibleShots.slice(1, 3);
  const rest = visibleShots.slice(3);
  const remaining = STAGE_SHOTS.length - visibleCount;
  const nextBatch = Math.min(PAGE_SIZE, remaining);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      // Lightbox chỉ duyệt trong ảnh đã hiện — tránh nhảy sang ảnh chưa load
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i === null ? i : (i + 1) % visibleCount));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? i : (i - 1 + visibleCount) % visibleCount));
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, visibleCount]);

  const activeShot = lightboxIndex !== null ? STAGE_SHOTS[lightboxIndex] : null;

  const loadMore = () => setVisibleCount((n) => Math.min(n + PAGE_SIZE, STAGE_SHOTS.length));

  return (
    <section
      id="sankhau"
      style={{
        position: "relative",
        width: "100%",
        background: "var(--bg-secondary)",
        fontFamily: "'Be Vietnam Pro',sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "48px 0 56px" : "72px 48px 80px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ padding: isMobile ? "0 24px" : 0 }}>
          <SectionHeader
            tone="light"
            kicker={ui.kicker}
            title={ui.title}
            script={ui.script}
            sparkle
            style={{
              marginBottom: isMobile ? 24 : 36,
              animation: "aboutReveal .7s ease forwards",
              opacity: 0,
            }}
          />
        </div>

        {/* Desktop mosaic / Mobile featured + filmstrip */}
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {featured && (
              <div style={{ padding: "0 24px" }}>
                <GalleryTile
                  shot={featured}
                  index={0}
                  lang={lang}
                  ui={ui}
                  isMobile
                  featured
                  priority
                  onOpen={setLightboxIndex}
                />
              </div>
            )}
            <div
              className="ml-gallery-strip"
              style={{
                display: "flex",
                gap: 10,
                overflowX: "auto",
                padding: "0 24px 4px",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {visibleShots.slice(1).map((shot, i) => (
                <div key={shot.id} style={{ scrollSnapAlign: "start" }}>
                  <GalleryTile
                    shot={shot}
                    index={i + 1}
                    lang={lang}
                    ui={ui}
                    isMobile
                    onOpen={setLightboxIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {featured && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: sideStack.length >= 2 ? "1.55fr 0.72fr 0.72fr" : "1fr",
                  gap: 12,
                  minHeight: 480,
                }}
              >
                <GalleryTile
                  shot={featured}
                  index={0}
                  lang={lang}
                  ui={ui}
                  isMobile={false}
                  featured
                  priority
                  onOpen={setLightboxIndex}
                />
                {sideStack.map((shot, i) => (
                  <GalleryTile
                    key={shot.id}
                    shot={shot}
                    index={i + 1}
                    lang={lang}
                    ui={ui}
                    isMobile={false}
                    onOpen={setLightboxIndex}
                  />
                ))}
              </div>
            )}

            {rest.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: 12,
                  height: 260,
                }}
              >
                {rest.slice(0, 4).map((shot, i) => (
                  <GalleryTile
                    key={shot.id}
                    shot={shot}
                    index={i + 3}
                    lang={lang}
                    ui={ui}
                    isMobile={false}
                    onOpen={setLightboxIndex}
                  />
                ))}
              </div>
            )}

            {rest.length > 4 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: 12,
                  rowGap: 12,
                }}
              >
                {rest.slice(4).map((shot, i) => (
                  <div key={shot.id} style={{ height: 200 }}>
                    <GalleryTile
                      shot={shot}
                      index={i + 7}
                      lang={lang}
                      ui={ui}
                      isMobile={false}
                      onOpen={setLightboxIndex}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {remaining > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: isMobile ? "28px 24px 0" : "36px 0 0",
            }}
          >
            <button
              type="button"
              onClick={loadMore}
              className="ml-outline-btn"
              style={{
                appearance: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                height: 46,
                padding: "0 26px",
                borderRadius: 999,
                border: "1px solid rgba(61,44,59,.28)",
                background: "transparent",
                color: "var(--text-primary)",
                cursor: "pointer",
                fontFamily: "'Be Vietnam Pro',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              {ui.moreCount(nextBatch)}
              <span style={{ color: "var(--accent-cta)" }}>↓</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeShot && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeShot.title[lang]}
          onClick={() => setLightboxIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            background: "rgba(11,6,20,.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? 16 : 40,
            animation: "aboutReveal .25s ease forwards",
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label={ui.close}
            className="ml-lightbox-btn"
            style={{
              position: "absolute",
              top: isMobile ? 18 : 28,
              right: isMobile ? 18 : 28,
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(250,246,248,.22)",
              background: "rgba(61,44,59,.4)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </button>

          {visibleCount > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i - 1 + visibleCount) % visibleCount));
              }}
              aria-label={ui.prev}
              className="ml-lightbox-btn"
              style={{
                position: "absolute",
                left: isMobile ? 8 : 28,
                top: "50%",
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(250,246,248,.18)",
                background: "rgba(61,44,59,.35)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M9 3L5 7L9 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(92vw, 1080px)",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 16 : 28,
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                flex: isMobile ? "0 0 auto" : "1 1 62%",
                width: isMobile ? "100%" : "auto",
                aspectRatio: activeShot.aspect,
                maxHeight: isMobile ? "52vh" : "78vh",
                overflow: "hidden",
                background: "#120814",
              }}
            >
              <ImagePlaceholder
                src={activeShot.src}
                alt={activeShot.title[lang]}
                fit="contain"
                sizes="(max-width: 760px) 92vw, 60vw"
                style={{ objectPosition: activeShot.focus ?? "50% 50%" }}
              />
            </div>

            <div
              style={{
                flex: isMobile ? "0 0 auto" : "0 0 280px",
                width: isMobile ? "100%" : 280,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                textAlign: isMobile ? "center" : "left",
                alignItems: isMobile ? "center" : "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--accent-gold)",
                  fontWeight: 600,
                }}
              >
                {activeShot.brand[lang]} · {activeShot.year}
              </span>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: isMobile ? 22 : 26,
                  color: "#fff",
                  lineHeight: 1.25,
                }}
              >
                {activeShot.title[lang]}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "rgba(250,246,248,.7)",
                }}
              >
                {activeShot.role[lang]} · {activeShot.cat[lang]}
              </p>
              <a
                href="#lienhe"
                onClick={() => setLightboxIndex(null)}
                className="ml-cta-btn"
                style={{
                  marginTop: 8,
                  appearance: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 44,
                  padding: "0 22px",
                  borderRadius: 999,
                  background: "var(--accent-cta-strong)",
                  color: "var(--bg-primary)",
                  textDecoration: "none",
                  fontFamily: "'Be Vietnam Pro',sans-serif",
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                {ui.cta} ✦
              </a>
              <span
                style={{
                  marginTop: 4,
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 13,
                  color: "rgba(250,246,248,.45)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(visibleCount).padStart(2, "0")}
              </span>
            </div>
          </div>

          {visibleCount > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i + 1) % visibleCount));
              }}
              aria-label={ui.next}
              className="ml-lightbox-btn"
              style={{
                position: "absolute",
                right: isMobile ? 8 : 28,
                top: "50%",
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(250,246,248,.18)",
                background: "rgba(61,44,59,.35)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
