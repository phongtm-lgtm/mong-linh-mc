"use client";

import { useViewport } from "@/hooks/useViewport";
import { useLanguage } from "@/hooks/useLanguage";

const COPY = {
  vi: {
    kicker: "BOOKING",
    titleLine1: "Đặt lịch cho",
    titleLine2: "sự kiện của bạn",
    script: "Giữ nhịp sân khấu. Chạm vào cảm xúc.",
    body: "Gửi brief chương trình, Mộng Linh sẽ phản hồi trong vòng 24 giờ đề xuất format dẫn, kịch bản sơ bộ và báo giá phù hợp.",
    ctaBrief: "GỬI BRIEF SỰ KIỆN",
    ctaContact: "LIÊN HỆ NHANH",
    cardKicker: "BOOKING CONTACT",
    contacts: [
      {
        name: "Facebook",
        value: "facebook.com/monglinhmc",
        href: "https://facebook.com/monglinhmc",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
          </svg>
        ),
      },
      {
        name: "Instagram",
        value: "@monglinh.host",
        href: "https://instagram.com/monglinh.host",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        ),
      },
      {
        name: "Email",
        value: "booking@monglinh.vn",
        href: "mailto:booking@monglinh.vn",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="3" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        ),
      },
      {
        name: "Zalo / Hotline",
        value: "090X XXX XXX",
        href: "tel:0900000000",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="12" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  zh: {
    kicker: "BOOKING",
    titleLine1: "为您的活动",
    titleLine2: "预约主持",
    script: "掌控节奏，触动人心。",
    body: "发送活动简介，梦灵将在24小时内回复，为您提供主持形式建议、初步脚本与合适报价。",
    ctaBrief: "发送活动需求",
    ctaContact: "快速联系",
    cardKicker: "BOOKING CONTACT",
    contacts: [
      {
        name: "Facebook",
        value: "facebook.com/monglinhmc",
        href: "https://facebook.com/monglinhmc",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
          </svg>
        ),
      },
      {
        name: "Instagram",
        value: "@monglinh.host",
        href: "https://instagram.com/monglinh.host",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        ),
      },
      {
        name: "Email",
        value: "booking@monglinh.vn",
        href: "mailto:booking@monglinh.vn",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="3" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        ),
      },
      {
        name: "Zalo / Hotline",
        value: "090X XXX XXX",
        href: "tel:0900000000",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="12" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
} as const;

export default function BookingCta() {
  const { isMobile } = useViewport();
  const { lang } = useLanguage();
  const copy = COPY[lang];

  return (
    <section
      id="lienhe"
      style={{
        position: "relative",
        width: "100%",
        background: "#F7F2ED", // Warm cream off-white background from reference image
        fontFamily: "'Be Vietnam Pro', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Delicate leaf shadow effect on top-left background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          left: -60,
          width: 550,
          height: 550,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 30% 30%, rgba(184, 142, 94, 0.08) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(66, 40, 56, 0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1220,
          margin: "0 auto",
          padding: isMobile ? "56px 24px 64px" : "80px 48px 88px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.15fr) minmax(380px, 0.85fr)",
          alignItems: "center",
          gap: isMobile ? 44 : 64,
        }}
      >
        {/* LEFT COLUMN — Text & Actions */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
            gap: 22,
          }}
        >
          {/* Subtitle / Kicker with lines */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontSize: 11,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#B88E5E", // Warm bronze gold
            }}
          >
            <span aria-hidden="true" style={{ width: 32, height: 1, background: "#B88E5E" }} />
            <span>{copy.kicker}</span>
            <span aria-hidden="true" style={{ width: 32, height: 1, background: "#B88E5E" }} />
          </div>

          {/* Main Title */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: "clamp(38px, 5.2vw, 68px)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "#3B2433", // Dark plum charcoal
              margin: 0,
            }}
          >
            {copy.titleLine1}
            <br />
            {copy.titleLine2}
          </h2>

          {/* Cursive Tagline */}
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: "clamp(24px, 2.6vw, 34px)",
              lineHeight: 1.3,
              color: "#B88E5E",
              margin: 0,
            }}
          >
            {copy.script}
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: isMobile ? 14 : 14.5,
              lineHeight: 1.75,
              color: "#5E4C59",
              maxWidth: 480,
              margin: "2px 0 6px",
            }}
          >
            {copy.body}
          </p>

          {/* CTA Buttons Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {/* Primary Dark Button */}
            <a
              href="mailto:booking@monglinh.vn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                height: 48,
                background: "#3B2433",
                color: "#FFF7FB",
                border: "none",
                borderRadius: 999,
                padding: "0 28px",
                fontSize: 11.5,
                letterSpacing: ".14em",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                boxShadow: "0 8px 24px -4px rgba(59, 36, 51, 0.35)",
                transition: "transform .25s ease, box-shadow .25s ease, filter .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 28px -4px rgba(59, 36, 51, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px -4px rgba(59, 36, 51, 0.35)";
              }}
            >
              <span>{copy.ctaBrief}</span>
              <span style={{ fontSize: 11, color: "#B88E5E" }}>✦</span>
            </a>

            {/* Outline Button */}
            <a
              href="tel:0900000000"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                height: 48,
                background: "transparent",
                color: "#3B2433",
                border: "1px solid #3B2433",
                borderRadius: 999,
                padding: "0 26px",
                fontSize: 11.5,
                letterSpacing: ".14em",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                transition: "transform .25s ease, background .25s ease, color .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59, 36, 51, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.34 1.78.66 2.62a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.46-1.23a2 2 0 012.11-.45c.84.32 1.72.54 2.62.66A2 2 0 0122 16.92z" />
              </svg>
              <span>{copy.ctaContact}</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — Booking Contact White Card */}
        <aside
          style={{
            position: "relative",
            background: "#FFFFFF",
            borderRadius: 24,
            padding: isMobile ? "32px 24px" : "44px 38px",
            boxShadow: "0 20px 60px rgba(59, 36, 51, 0.07), 0 2px 10px rgba(59, 36, 51, 0.03)",
            border: "1px solid rgba(240, 232, 225, 0.8)",
            boxSizing: "border-box",
          }}
        >
          {/* Card Header */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#B88E5E",
              }}
            >
              {copy.cardKicker}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginTop: 10,
                width: "100%",
              }}
            >
              <span style={{ height: 1, flex: 1, background: "#F0E8E1" }} />
              <span style={{ fontSize: 10, color: "#B88E5E" }}>✦</span>
              <span style={{ height: 1, flex: 1, background: "#F0E8E1" }} />
            </div>
          </div>

          {/* Contact List */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {copy.contacts.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "16px 0",
                  borderBottom: idx < copy.contacts.length - 1 ? "1px solid #F2EBE4" : "none",
                  textDecoration: "none",
                  transition: "transform .2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {/* Round Soft Icon Container */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#F5EFEA",
                    color: "#3B2433",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Contact Labels */}
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#3B2433",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontSize: 13,
                      color: "#806F7C",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>

      {/* Floating Monogram Badge in Bottom-Left Corner */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: isMobile ? 18 : 36,
          bottom: isMobile ? 18 : 36,
          width: 46,
          height: 46,
          borderRadius: "50%",
          background: "#3B2433",
          color: "#FFF7FB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Playfair Display', serif",
          fontSize: 16,
          fontWeight: 600,
          boxShadow: "0 8px 24px rgba(59, 36, 51, 0.25)",
          zIndex: 10,
        }}
      >
        ML
      </div>
    </section>
  );
}
