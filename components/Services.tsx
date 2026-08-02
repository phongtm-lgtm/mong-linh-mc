"use client";

import { useEffect, useState, type ReactNode } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionHeader from "./SectionHeader";
import { useViewport } from "@/hooks/useViewport";
import { useLanguage } from "@/hooks/useLanguage";

type Service = {
  id: string;
  title: { vi: string; zh: string };
  summary: { vi: string; zh: string };
  detail: { vi: string; zh: string };
  image: string;
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    id: "corporate",
    title: { vi: "Corporate Event", zh: "企业活动" },
    summary: {
      vi: "Hội nghị, hội thảo, lễ tổng kết, kick-off.",
      zh: "会议、研讨会、年终盛典、启动仪式。",
    },
    detail: {
      vi: "Dẫn dắt hội nghị, hội thảo và lễ tổng kết với nhịp chuyên nghiệp, giúp thương hiệu truyền tải thông điệp rõ ràng và chỉn chu.",
      zh: "以专业稳健的节奏主持会议、研讨会与年终盛典，帮助品牌清晰、严谨地传递讯息。",
    },
    image: "/media/gallery-vietnam-china.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.4" />
        <path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8S14 16 14.5 19" />
        <path d="M14 19c.4-2.2 1.8-3.5 3.8-3.5 1.5 0 2.7.8 3.2 2.2" />
      </svg>
    ),
  },
  {
    id: "brand",
    title: { vi: "Brand Event", zh: "品牌活动" },
    summary: {
      vi: "Ra mắt sản phẩm, activation, khai trương.",
      zh: "产品发布、品牌活动、开幕典礼。",
    },
    detail: {
      vi: "Đồng hành các buổi ra mắt sản phẩm và activation — giữ cảm xúc thương hiệu xuyên suốt từ mở màn đến khoảnh khắc cao trào.",
      zh: "全程陪伴产品发布与品牌活动——从开场到高潮时刻，始终保持品牌情感的连贯与张力。",
    },
    image: "/media/gallery-disney-pnj.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M4 9h16v11H4z" />
        <path d="M4 9l2.5-4h11L20 9" />
        <path d="M12 5v15M8 9c0 2 1.8 3 4 3s4-1 4-3" />
      </svg>
    ),
  },
  {
    id: "luxury",
    title: { vi: "Luxury Event", zh: "尊享盛典" },
    summary: {
      vi: "Gala, lễ trao giải, tiệc doanh nghiệp.",
      zh: "晚宴盛典、颁奖典礼、企业酒会。",
    },
    detail: {
      vi: "Dẫn gala và lễ trao giải với phong thái trang nhã, kiểm soát nhịp sân khấu tinh tế cho không gian cao cấp.",
      zh: "以优雅从容的台风主持晚宴与颁奖典礼，为高端场合精准掌控舞台节奏。",
    },
    image: "/media/gallery-gold-gown.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M5 16h14l-1.2 4H6.2L5 16z" />
        <path d="M4 8l3.2 3L12 5l4.8 6L20 8l-1 8H5L4 8z" />
      </svg>
    ),
  },
  {
    id: "entertainment",
    title: { vi: "Entertainment", zh: "娱乐节目" },
    summary: {
      vi: "Talkshow, Livestream, Concert, Festival.",
      zh: "脱口秀、直播、演唱会、音乐节。",
    },
    detail: {
      vi: "Chủ trì talkshow, livestream và sân khấu giải trí — ứng biến linh hoạt, kết nối năng lượng khán giả và nghệ sĩ.",
      zh: "主持脱口秀、直播与娱乐舞台——灵活应变，连接观众与艺人之间的能量。",
    },
    image: "/media/gallery-showmeyourgu.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0014 0M12 18v3M9 21h6" />
      </svg>
    ),
  },

  {
    id: "bilingual",
    title: { vi: "Song ngữ Việt – Trung", zh: "中越双语主持" },
    summary: {
      vi: "Dẫn chương trình cho sự kiện có khách mời và đối tác quốc tế.",
      zh: "为拥有国际嘉宾与合作伙伴的活动担任主持。",
    },
    detail: {
      vi: "Dẫn song ngữ Việt – Trung mượt mà, cầu nối văn hóa giữa doanh nghiệp và đối tác quốc tế trên cùng một sân khấu.",
      zh: "流畅的中越双语主持，在同一个舞台上架起企业与国际合作伙伴之间的文化桥梁。",
    },
    image: "/media/gallery-tbm-wide.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
      </svg>
    ),
  },
];

const COPY = {
  vi: {
    kicker: "Dịch vụ",
    title: "Loại hình sự kiện tôi đồng hành",
    ctaText: "Bạn cần tư vấn dịch vụ phù hợp?",
    ctaLink: "LIÊN HỆ MỘNG LINH",
  },
  zh: {
    kicker: "服务项目",
    title: "我所专注的活动类型",
    ctaText: "需要为您的活动量身推荐服务？",
    ctaLink: "联系梦灵",
  },
} as const;

export default function Services() {
  const { isMobile } = useViewport();
  const { lang } = useLanguage();
  const copy = COPY[lang];
  const [active, setActive] = useState(0);
  const [display, setDisplay] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const current = SERVICES[active];
  const shown = SERVICES[display];

  useEffect(() => {
    if (active === display) return;
    setFadeIn(false);
    const t = window.setTimeout(() => {
      setDisplay(active);
      setFadeIn(true);
    }, 180);
    return () => window.clearTimeout(t);
  }, [active, display]);

  return (
    <section
      id="dichvu"
      style={{
        position: "relative",
        width: "100%",
        background: "#FAF6F2",
        fontFamily: "'Be Vietnam Pro',sans-serif",
        overflow: "hidden",
        display: "flex",
        boxSizing: "border-box",
          borderTop: "1px solid rgba(59,36,51,.06)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "48px 24px 56px" : "72px 48px 72px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(340px, 1.05fr) minmax(320px, 0.95fr)",
          gap: isMobile ? 28 : 0,
          alignItems: "stretch",
          boxSizing: "border-box",
          minHeight: 0,
          flex: 1,
        }}
      >
        {/* LEFT — list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            paddingRight: isMobile ? 0 : 40,
            borderRight: isMobile ? "none" : "1px solid var(--bg-secondary)",
          }}
        >
          <SectionHeader
            tone="dark"
            kicker={copy.kicker}
            title={copy.title}
            style={{
              marginBottom: 24,
              animation: "aboutReveal .7s ease forwards",
              animationDelay: ".15s",
              opacity: 0,
            }}
          />

          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              borderTop: "1px solid var(--bg-secondary)",
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              animation: "aboutReveal .7s ease forwards",
              animationDelay: ".3s",
              opacity: 0,
            }}
          >
            {SERVICES.map((service, i) => {
              const isActive = i === active;
              return (
                <li
                  key={service.id}
                  style={{
                    borderBottom: "1px solid rgba(59,36,51,.08)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="ml-service-item"
                    aria-current={isActive ? "true" : undefined}
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: isMobile
                        ? "36px 24px minmax(0, 1fr) 18px"
                        : "40px 26px minmax(0, 1fr) 18px",
                      alignItems: "center",
                      gap: 8,
                      padding: isActive
                        ? isMobile
                          ? "13px 0 13px 8px"
                          : "13px 6px 13px 10px"
                        : isMobile
                          ? "11px 0 11px 8px"
                          : "10px 6px 10px 10px",
                      border: "none",
                      borderLeft: isActive ? "2px solid #B88E5E" : "2px solid transparent",
                      background: "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "'Be Vietnam Pro',sans-serif",
                      transition: "padding .25s ease, border-color .2s ease, color .2s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: isMobile ? 16 : 18,
                        color: isActive ? "#B88E5E" : "rgba(184,142,94,.4)",
                        fontWeight: 500,
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        color: isActive ? "#B88E5E" : "rgba(184,142,94,.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {service.icon}
                    </span>
                    <span style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
                      <span
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: isMobile ? 15 : 16,
                          fontWeight: 500,
                          color: isActive ? "#3B2433" : "rgba(59,36,51,.55)",
                          lineHeight: 1.2,
                        }}
                      >
                        {service.title[lang]}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          lineHeight: 1.4,
                          color: "var(--text-secondary)",
                          maxHeight: isActive ? 40 : 0,
                          opacity: isActive ? 0.85 : 0,
                          overflow: "hidden",
                          transition: "max-height .28s ease, opacity .22s ease",
                        }}
                      >
                        {service.summary[lang]}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        color: "#B88E5E",
                        fontSize: 15,
                        lineHeight: 1,
                        justifySelf: "end",
                        opacity: isActive ? 1 : 0.4,
                      }}
                    >
                      →
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <a
            href="#lienhe"
            className="ml-detail-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 6,
              marginTop: 18,
              fontSize: 12.5,
              color: "rgba(59,36,51,.6)",
              textDecoration: "none",
              lineHeight: 1.45,
              flexShrink: 0,
            }}
          >
            {copy.ctaText}
            <span style={{ color: "#B88E5E", fontWeight: 600, letterSpacing: ".04em" }}>
              {copy.ctaLink}
            </span>
            <span aria-hidden="true" style={{ color: "#B88E5E" }}>
              →
            </span>
          </a>
        </div>

        {/* RIGHT — featured media + detail */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            paddingLeft: isMobile ? 0 : 40,
            gap: 16,
          }}
        >
          <div
            style={{
              position: "relative",
              flex: "1 1 auto",
              minHeight: isMobile ? 240 : 0,
              aspectRatio: isMobile ? "4 / 3" : undefined,
              overflow: "hidden",
              borderRadius: 12,
              border: "1px solid rgba(59,36,51,.07)",
              background: "#EDE5DC",
              animation: "aboutReveal .7s ease forwards",
              animationDelay: ".35s",
              opacity: 0,
            }}
          >
            {/* Crossfade stack */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: fadeIn ? 1 : 0,
                transition: "opacity .35s ease",
              }}
            >
              <ImagePlaceholder
                src={shown.image}
                alt={`${shown.title[lang]} — MC Mộng Linh`}
                fit="cover"
                sizes={isMobile ? "100vw" : "48vw"}
                className="ml-img-grade"
              />
              <div aria-hidden="true" className="ml-img-tint" style={{ zIndex: 1 }} />
            </div>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: "linear-gradient(to top, rgba(61,44,59,.28) 0%, transparent 42%)",
                zIndex: 2,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "stretch" : "flex-end",
              justifyContent: "space-between",
              gap: 14,
              flexShrink: 0,
              animation: "aboutReveal .7s ease forwards",
              animationDelay: ".45s",
              opacity: 0,
            }}
          >
            <div
              style={{
                minWidth: 0,
                flex: 1,
                background: "#FFFFFF",
                borderRadius: 10,
                padding: "12px 16px",
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? "translateY(0)" : "translateY(6px)",
                transition: "opacity .35s ease, transform .35s ease",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#B88E5E",
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                {current.title[lang]}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  color: "var(--text-primary)",
                  maxWidth: 420,
                }}
              >
                {current.detail[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
