"use client";

import { useViewport } from "@/hooks/useViewport";
import { useLanguage } from "@/hooks/useLanguage";

const NAV = [
  { href: "#gioithieu", label: { vi: "Giới thiệu", zh: "关于我们" } },
  { href: "#dichvu", label: { vi: "Dịch vụ", zh: "服务项目" } },
  { href: "#sankhau", label: { vi: "Sân khấu", zh: "舞台实录" } },
  { href: "#quytrinh", label: { vi: "Quy trình", zh: "合作流程" } },
];

const COPY = {
  vi: {
    tagline: "MC & Event Host · Song ngữ Việt – Trung",
    desc: "Giữ nhịp sân khấu, kết nối con người và truyền tải giá trị thương hiệu qua từng chương trình.",
    nav: "Điều hướng",
    contact: "Liên hệ booking",
    cities: "TP. Hồ Chí Minh · Hà Nội · Đà Nẵng",
    backToTop: "Về đầu trang ↑",
  },
  zh: {
    tagline: "MC & Event Host · 中越双语主持",
    desc: "掌控舞台节奏，连结人心，透过每一场活动传递品牌价值。",
    nav: "导航",
    contact: "预约联系",
    cities: "胡志明市 · 河内 · 岘港",
    backToTop: "返回顶部 ↑",
  },
} as const;

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4.2a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3zM20.3 20h-2.8v-5.6c0-1.3 0-3-1.85-3s-2.15 1.4-2.15 2.9V20H10.7V9.5h2.7v1.4h.04c.38-.72 1.3-1.48 2.68-1.48 2.86 0 3.38 1.88 3.38 4.33V20z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.07-2.77V9.4A6.34 6.34 0 1 0 15.8 15.5V8.41a8.3 8.3 0 0 0 4.25 1.18V6.14a4.8 4.8 0 0 1-.46.55z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { isMobile } = useViewport();
  const { lang } = useLanguage();
  const copy = COPY[lang];

  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        background: "var(--bg-dark)",
        fontFamily: "'Be Vietnam Pro',sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1220,
          margin: "0 auto",
          padding: isMobile ? "56px 24px 28px" : "80px 48px 32px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)",
            gap: isMobile ? 40 : 48,
            paddingBottom: isMobile ? 40 : 56,
            borderBottom: "1px solid rgba(250,246,248,.14)",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span
              style={{
                fontFamily: "'Great Vibes',cursive",
                fontWeight: 400,
                fontSize: "clamp(38px, 4vw, 48px)",
                lineHeight: 1,
                color: "var(--bg-primary)",
              }}
            >
              Mộng Linh
            </span>
            <span
              style={{
                fontSize: 10.5,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "rgba(250,246,248,.65)",
              }}
            >
              {copy.tagline}
            </span>
            <p
              style={{
                margin: "6px 0 0",
                fontSize: 13,
                lineHeight: 1.7,
                color: "rgba(250,246,248,.65)",
                maxWidth: 360,
              }}
            >
              {copy.desc}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="ml-social-icon"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid var(--bg-primary)",
                    color: "var(--text-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "color .2s ease, transform .2s ease",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: ".24em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "var(--bg-primary)",
              }}
            >
              {copy.nav}
            </span>
            <nav style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px 20px" }}>
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="ml-nav-link"
                  style={{
                    fontSize: 13,
                    color: "rgba(250,246,248,.65)",
                    textDecoration: "none",
                    transition: "color .2s ease",
                  }}
                >
                  {link.label[lang]}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: ".24em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "var(--bg-primary)",
              }}
            >
              {copy.contact}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:booking@monglinh.mc"
                className="ml-nav-link"
                style={{ fontSize: 13, color: "rgba(250,246,248,.65)", textDecoration: "none", transition: "color .2s ease" }}
              >
                booking@monglinh.mc
              </a>
              <a
                href="tel:+84900000000"
                className="ml-nav-link"
                style={{ fontSize: 13, color: "rgba(250,246,248,.65)", textDecoration: "none", transition: "color .2s ease" }}
              >
                +84 900 000 000 (Zalo)
              </a>
              <span style={{ fontSize: 13, color: "rgba(250,246,248,.65)" }}>{copy.cities}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            paddingTop: 24,
          }}
        >
          <span style={{ fontSize: 11.5, color: "rgba(250,246,248,.65)", letterSpacing: ".04em" }}>
            © {new Date().getFullYear()} Mộng Linh — MC &amp; Event Host. All rights reserved.
          </span>
          <a
            href="#"
            className="ml-nav-link"
            style={{
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "rgba(250,246,248,.65)",
              textDecoration: "none",
              transition: "color .2s ease",
            }}
          >
            {copy.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
