"use client";

import ImagePlaceholder from "./ImagePlaceholder";
import SectionHeader from "./SectionHeader";
import { useViewport } from "@/hooks/useViewport";
import { useLanguage } from "@/hooks/useLanguage";

const VALUES = [
  {
    id: "tinh-te",
    title: { vi: "Tinh tế", zh: "精致" },
    desc: {
      vi: "Dẫn dắt tự nhiên, chạm cảm xúc",
      zh: "自然引导，触动人心",
    },
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M18 6L20.2 13.2H27.8L21.6 17.6L24 25L18 20.4L12 25L14.4 17.6L8.2 13.2H15.8L18 6Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "chuyen-nghiep",
    title: { vi: "Chuyên nghiệp", zh: "专业" },
    desc: {
      vi: "Làm chủ sân khấu, kiểm soát nhịp độ",
      zh: "掌控全场，把握节奏",
    },
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M18 7c2.6 2.8 6.8 3.6 10 2-1.2 4-1 8.2 1 12-3.8-.4-7.4 1.4-9.6 4.8-2.2-3.4-5.8-5.2-9.6-4.8 2-3.8 2.2-8 1-12 3.2 1.6 7.4.8 10-2z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: "linh-hoat",
    title: { vi: "Linh hoạt", zh: "灵活" },
    desc: {
      vi: "Ứng biến nhanh, xử lý tình huống tốt",
      zh: "反应迅速，随机应变",
    },
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="11.5" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M18 10v8l5 3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 11.5A10.5 10.5 0 0 1 28 18M10 24.5A10.5 10.5 0 0 1 8 18"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "ket-noi",
    title: { vi: "Kết nối", zh: "亲和力" },
    desc: {
      vi: "Song ngữ Việt – Trung, kết nối đa văn hoá",
      zh: "中越双语，连结多元文化",
    },
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="13" cy="14" r="4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="23" cy="14" r="4" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M6.5 27c1.2-4 4-6 6.5-6s5.3 2 6.5 6M16.5 27c1.2-4 4-6 6.5-6s5.3 2 6.5 6"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "truyen-cam-hung",
    title: { vi: "Truyền cảm hứng", zh: "感染力" },
    desc: {
      vi: "Truyền tải thông điệp, lan tỏa giá trị",
      zh: "传递讯息，散发价值",
    },
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M18 7l1.4 5.4 5.4-.2-4.5 3.2 1.8 5.2L18 17.8l-4.1 2.8 1.8-5.2-4.5-3.2 5.4.2L18 7z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M8 26h20M11 29.5h14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STAT_ITEMS = [
  {
    id: "events",
    value: "200+",
    label: { vi: "Sự kiện đã dẫn dắt", zh: "主持活动场次" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="6" y="9" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 15h24M12 5.5v6M24 5.5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "brands",
    value: "20+",
    label: { vi: "Thương hiệu đồng hành", zh: "合作品牌" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M18 5.5L21.2 12.8L29 14.2L23.5 19.6L24.9 27.4L18 23.7L11.1 27.4L12.5 19.6L7 14.2L14.8 12.8L18 5.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "bilingual",
    value: "VI – TR",
    label: { vi: "Song ngữ", zh: "双语主持" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="12.5" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="18" cy="18" rx="5.2" ry="12.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M5.5 18h25" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
  },
];

const PORTRAIT_SRC = "/media/about-mongLinh.jpg";

const COPY = {
  vi: {
    imgAlt: "MC Mộng Linh cầm micro",
    kicker: "Về Mộng Linh",
    title: "Người giữ nhịp sân khấu",
    badge: { mc: "MC song ngữ", langs: "Vietnamese • Chinese" },
    role: "MC & Event Host",
    quote: "Một chương trình thành công không chỉ đúng kịch bản, mà còn đúng cảm xúc.",
    paragraphs: [
      "Tôi đồng hành cùng doanh nghiệp và đối tác để tạo nên những chương trình được dẫn dắt mạch lạc, chỉnh chu và giàu cảm xúc.",
      "Với khả năng song ngữ Việt - Trung và kinh nghiệm đa dạng, tôi tự tin kết nối khán giả, truyền tải trọn vẹn thông điệp thương hiệu và nâng tầm giá trị sự kiện.",
    ],
  },
  zh: {
    imgAlt: "梦灵MC手持麦克风",
    kicker: "关于梦灵",
    title: "掌控全场节奏的主持人",
    badge: { mc: "双语主持人", langs: "越南语 • 中文" },
    role: "MC & Event Host",
    quote: "一场成功的活动，不仅要贴合脚本，更要契合情感。",
    paragraphs: [
      "我与企业和合作伙伴携手打造节奏清晰、细致严谨且情感丰沛的活动体验。",
      "凭借中越双语能力与丰富的主持经验，我能够自信地连接观众，完整传递品牌讯息，提升活动的整体价值。",
    ],
  },
} as const;

function QuoteMark() {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" aria-hidden="true">
      <path
        d="M0 34V20.4C0 9.2 5.8 2.4 17.4 0l1.6 4.6C12.2 6.2 9 10.4 9 17.2h8.2V34H0zm24.2 0V20.4C24.2 9.2 30 2.4 41.6 0L43.2 4.6C36.4 6.2 33.2 10.4 33.2 17.2h8.2V34H24.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function About() {
  const { isMobile } = useViewport();
  const { lang } = useLanguage();
  const copy = COPY[lang];

  return (
    <section
      id="gioithieu"
      style={{
        position: "relative",
        width: "100%",
        background: "var(--bg-primary)",
        fontFamily: "'Be Vietnam Pro',sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(340px, 0.9fr) minmax(520px, 1.2fr)",
          gap: isMobile ? 0 : 48,
          padding: isMobile ? "36px 20px 48px" : "72px 64px 80px",
          boxSizing: "border-box",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
      {/* LEFT — portrait card */}
      <div
        style={{
          position: "relative",
          order: 1,
          animation: "aboutPortrait 1s ease forwards",
          opacity: 0,
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          minHeight: isMobile ? 460 : 640,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: isMobile ? 360 : 440,
            minHeight: isMobile ? 460 : 640,
            height: "100%",
            borderRadius: isMobile ? 18 : 22,
            overflow: "hidden",
            border: "1.5px solid rgba(201,160,92,.72)",
            boxShadow: "0 24px 64px rgba(61,44,59,.14)",
            background:
              "radial-gradient(ellipse 70% 55% at 58% 35%, rgba(120,78,98,.45) 0%, transparent 62%), linear-gradient(165deg, #4A2F42 0%, #2E1A2A 55%, #24141F 100%)",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <ImagePlaceholder
              src={`${PORTRAIT_SRC}?v=4`}
              alt={copy.imgAlt}
              fit="cover"
              sizes={isMobile ? "90vw" : "32vw"}
              priority
              className="ml-img-grade"
              style={{
                objectPosition: isMobile ? "68% 12%" : "72% 8%",
                filter: "brightness(1.06) contrast(1.05) saturate(0.96)",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(to top, rgba(28,14,24,.72) 0%, rgba(28,14,24,.2) 28%, transparent 48%), radial-gradient(circle at 70% 88%, rgba(201,160,92,.18) 0%, transparent 42%)",
              }}
            />
          </div>

          {/* Top badge */}
          <div
            style={{
              position: "absolute",
              left: isMobile ? 20 : 26,
              top: isMobile ? 22 : 28,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Be Vietnam Pro',sans-serif",
                fontSize: isMobile ? 12 : 13,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#fff",
                textShadow: "0 2px 12px rgba(0,0,0,.35)",
              }}
            >
              {copy.badge.mc}
            </span>
            <span
              style={{
                fontFamily: "'Be Vietnam Pro',sans-serif",
                fontSize: isMobile ? 9.5 : 10,
                fontWeight: 500,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "rgba(250,246,248,.78)",
              }}
            >
              {copy.badge.langs}
            </span>
          </div>

          {/* Signature block */}
          <div
            style={{
              position: "absolute",
              left: isMobile ? 20 : 26,
              bottom: isMobile ? 44 : 52,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Great Vibes',cursive",
                fontWeight: 400,
                fontSize: isMobile ? 42 : 52,
                color: "var(--accent-gold)",
                lineHeight: 1,
                textShadow: "0 2px 16px rgba(0,0,0,.35)",
                animation: "signatureIn .9s ease forwards",
                animationDelay: ".4s",
                opacity: 0,
              }}
            >
              Mộng Linh
            </span>
            <span
              style={{
                fontFamily: "'Be Vietnam Pro',sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "rgba(250,246,248,.88)",
              }}
            >
              {copy.role}
            </span>
          </div>

        </div>
      </div>

      {/* RIGHT — copy */}
      <div
        style={{
          order: 2,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: 0,
          padding: isMobile ? "28px 0 0" : "8px 8px 8px 0",
          boxSizing: "border-box",
          zIndex: 2,
        }}
      >
        <SectionHeader
          tone="light"
          kicker={copy.kicker}
          title={copy.title}
          style={{
            marginBottom: isMobile ? 18 : 22,
            animation: "aboutReveal .7s ease forwards",
            animationDelay: ".05s",
            opacity: 0,
          }}
        />

        {/* Pull quote */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? 12 : 16,
            alignItems: "flex-start",
            maxWidth: 620,
            margin: isMobile ? "0 0 18px" : "0 0 22px",
            animation: "aboutReveal .7s ease forwards",
            animationDelay: ".12s",
            opacity: 0,
          }}
        >
          <span style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: 2 }}>
            <QuoteMark />
          </span>
          <p
            style={{
              fontFamily: "'Playfair Display',serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: isMobile ? 16.5 : 19,
              lineHeight: 1.55,
              color: "#A67C52",
              margin: 0,
            }}
          >
            {copy.quote}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 12 : 14,
            maxWidth: 640,
            marginBottom: isMobile ? 24 : 28,
            animation: "aboutReveal .7s ease forwards",
            animationDelay: ".18s",
            opacity: 0,
          }}
        >
          {copy.paragraphs.map((p) => (
            <p
              key={p.slice(0, 24)}
              style={{
                fontFamily: "'Be Vietnam Pro',sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? 14 : 15,
                lineHeight: isMobile ? 1.75 : 1.85,
                color: "rgba(61,44,59,.82)",
                margin: 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Stat boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? 10 : 12,
            width: "100%",
            marginBottom: isMobile ? 26 : 32,
            animation: "aboutReveal .7s ease forwards",
            animationDelay: ".28s",
            opacity: 0,
          }}
        >
          {STAT_ITEMS.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 8,
                padding: isMobile ? "14px 12px" : "16px 14px",
                border: "1px solid rgba(61,44,59,.14)",
                borderRadius: 12,
                background: "rgba(255,255,255,.55)",
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "var(--accent-gold)", display: "flex" }}>{item.icon}</span>
              <span
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontWeight: 700,
                  fontSize: isMobile ? 22 : 26,
                  lineHeight: 1,
                  color: "var(--text-primary)",
                }}
              >
                {item.value}
              </span>
              <span
                style={{
                  fontFamily: "'Be Vietnam Pro',sans-serif",
                  fontSize: isMobile ? 9.5 : 10,
                  fontWeight: 600,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  lineHeight: 1.35,
                }}
              >
                {item.label[lang]}
              </span>
            </div>
          ))}
        </div>

        {/* Values row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(5, minmax(0, 1fr))",
            gap: isMobile ? 18 : 16,
            width: "100%",
            animation: "aboutReveal .7s ease forwards",
            animationDelay: ".38s",
            opacity: 0,
          }}
        >
          {VALUES.map((value) => (
            <div
              key={value.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                paddingRight: isMobile ? 0 : 8,
              }}
            >
              <span style={{ color: "var(--accent-cta)", display: "flex" }}>{value.icon}</span>
              <span
                style={{
                  fontFamily: "'Be Vietnam Pro',sans-serif",
                  fontSize: isMobile ? 12.5 : 13,
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  letterSpacing: ".04em",
                  textTransform: "uppercase",
                }}
              >
                {value.title[lang]}
              </span>
              <span
                style={{
                  fontFamily: "'Be Vietnam Pro',sans-serif",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: "var(--text-secondary)",
                }}
              >
                {value.desc[lang]}
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
