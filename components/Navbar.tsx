"use client";

import { useEffect, useState } from "react";
import { useViewport } from "@/hooks/useViewport";
import { useLanguage } from "@/hooks/useLanguage";

const NAV_LINKS = [
  { href: "#gioithieu", label: { vi: "GIỚI THIỆU", zh: "关于我们" }, id: "gioithieu" },
  { href: "#dichvu", label: { vi: "DỊCH VỤ", zh: "服务项目" }, id: "dichvu" },
  { href: "#sankhau", label: { vi: "SÂN KHẤU", zh: "舞台实录" }, id: "sankhau" },
  { href: "#quytrinh", label: { vi: "QUY TRÌNH", zh: "合作流程" }, id: "quytrinh" },
  { href: "#lienhe", label: { vi: "LIÊN HỆ", zh: "联系预约" }, id: "lienhe" },
];

export default function Navbar() {
  const { wideNav, isMobile } = useViewport();
  const { lang, setLang, isVi } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sectionIds = [
      "gioithieu",
      "dichvu",
      "doitac",
      "sankhau",
      "quytrinh",
      "lienhe",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const probeY = 80;
      let currentActive = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          currentActive = id;
          break;
        }
      }

      setActiveId(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: isMobile ? 62 : 72,
        padding: isMobile ? "0 20px" : "0 48px",
        boxSizing: "border-box",
        background: isScrolled ? "var(--nav-glass)" : "transparent",
        backdropFilter: isScrolled ? "blur(18px) saturate(1.15)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(18px) saturate(1.15)" : "none",
        borderBottom: isScrolled
          ? "1px solid var(--nav-border)"
          : "1px solid transparent",
        boxShadow: isScrolled
          ? "0 12px 36px rgba(20, 10, 18, 0.28)"
          : "none",
        transition:
          "background 0.35s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        pointerEvents: "none",
      }}
    >
      {/* BRAND LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, pointerEvents: "auto" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 24 : 28,
              fontWeight: 600,
              color: "var(--nav-ink)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            ML
          </span>
          <span
            style={{
              width: 1,
              height: 26,
              background: "rgba(255, 248, 251, 0.18)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: isMobile ? 12.5 : 13.5,
                letterSpacing: ".16em",
                color: "var(--nav-ink)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              MỘNG LINH
            </span>
            <span
              style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: 9,
                letterSpacing: ".22em",
                color: "var(--accent-gold)",
                marginTop: 2,
                lineHeight: 1.2,
                fontWeight: 500,
              }}
            >
              MC &amp; EVENT HOST
            </span>
          </div>
        </a>
      </div>

      {/* DESKTOP NAV LINKS */}
      {wideNav && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            flexShrink: 1,
            minWidth: 0,
            pointerEvents: "auto",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`ml-luxury-nav-link${isActive ? " is-active" : ""}`}
              >
                {link.label[lang]}
              </a>
            );
          })}
        </div>
      )}

      {/* CONTROLS — GLASS LANGUAGE SWITCHER & LUXURY GRADIENT CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 10 : 16,
          flexShrink: 0,
          pointerEvents: "auto",
        }}
      >
        {/* Glass Capsule Language Switcher */}
        <div className="ml-luxury-lang-capsule">
          <button
            onClick={() => setLang("vi")}
            className={`ml-luxury-lang-btn${isVi ? " is-active" : ""}`}
          >
            VI
          </button>
          <button
            onClick={() => setLang("zh")}
            className={`ml-luxury-lang-btn${!isVi ? " is-active" : ""}`}
          >
            EN
          </button>
        </div>

        {/* Luxury Pill CTA Button */}
        {!isMobile && (
          <a href="#lienhe" className="ml-luxury-cta-btn">
            <span>{isVi ? "BOOK NGAY" : "立即预约"}</span>
            <span aria-hidden="true" style={{ fontSize: 10, color: "var(--accent-gold)" }}>✦</span>
          </a>
        )}
      </div>
    </nav>
  );
}
