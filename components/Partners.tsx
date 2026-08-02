"use client";

import { useLanguage } from "@/hooks/useLanguage";

const COPY = {
  vi: { kicker: "ĐỐI TÁC & KHÁCH HÀNG" },
  zh: { kicker: "合作伙伴与客户" },
} as const;

// SVG text-based logos to avoid missing image dependencies
const BRANDS = [
  {
    id: "vinfast",
    label: "VINFAST",
    svg: (
      <svg viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="VinFast">
        <text x="2" y="24" fontFamily="'Be Vietnam Pro',sans-serif" fontWeight="700" fontSize="20" letterSpacing="1" fill="currentColor">V</text>
        <text x="18" y="24" fontFamily="'Be Vietnam Pro',sans-serif" fontWeight="400" fontSize="20" letterSpacing="0.5" fill="currentColor">INFAST</text>
      </svg>
    ),
  },
  {
    id: "vingroup",
    label: "VINGROUP",
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vingroup">
        <text x="2" y="24" fontFamily="'Be Vietnam Pro',sans-serif" fontWeight="700" fontSize="20" letterSpacing="1" fill="currentColor">V</text>
        <text x="18" y="24" fontFamily="'Be Vietnam Pro',sans-serif" fontWeight="400" fontSize="20" letterSpacing="0.5" fill="currentColor">INGROUP</text>
      </svg>
    ),
  },
  {
    id: "samsung",
    label: "SAMSUNG",
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Samsung">
        <text x="2" y="24" fontFamily="'Be Vietnam Pro',sans-serif" fontWeight="400" fontSize="20" letterSpacing="1.5" fill="currentColor">SAMSUNG</text>
      </svg>
    ),
  },
  {
    id: "shiseido",
    label: "SHISEIDO",
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Shiseido">
        <text x="2" y="24" fontFamily="'Playfair Display',serif" fontWeight="400" fontSize="20" letterSpacing="1" fill="currentColor">SHISEIDO</text>
      </svg>
    ),
  },
  {
    id: "techcombank",
    label: "TECHCOMBANK",
    svg: (
      <svg viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Techcombank">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="13" y="21" fontFamily="'Be Vietnam Pro',sans-serif" fontWeight="700" fontSize="13" fill="currentColor">T</text>
        <text x="32" y="24" fontFamily="'Be Vietnam Pro',sans-serif" fontWeight="400" fontSize="15" letterSpacing="0.3" fill="currentColor">TECHCOMBANK</text>
      </svg>
    ),
  },
  {
    id: "loreal",
    label: "L'ORÉAL",
    svg: (
      <svg viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="L'Oréal">
        <text x="2" y="24" fontFamily="'Playfair Display',serif" fontWeight="400" fontSize="20" letterSpacing="0.5" fill="currentColor">L'ORÉAL</text>
      </svg>
    ),
  },
];

export default function Partners() {
  const { lang } = useLanguage();
  const copy = COPY[lang];

  return (
    <section
      id="doitac"
      style={{
        position: "relative",
        width: "100%",
        background: "#F7F2ED",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "36px 32px 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Kicker centered */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginBottom: 32,
          }}
        >
          <span style={{ height: 1, width: 48, background: "rgba(59,36,51,0.15)" }} />
          <span
            style={{
              fontSize: 10.5,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#B88E5E",
              whiteSpace: "nowrap",
            }}
          >
            {copy.kicker}
          </span>
          <span style={{ height: 1, width: 48, background: "rgba(59,36,51,0.15)" }} />
        </div>

        {/* Brand logos row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px 40px",
          }}
        >
          {BRANDS.map((brand, i) => (
            <div
              key={brand.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(59,36,51,0.45)",
                height: 32,
                minWidth: 80,
                flexShrink: 0,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.color = "rgba(59,36,51,0.75)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.color = "rgba(59,36,51,0.45)";
              }}
              title={brand.label}
            >
              <div style={{ height: 28, display: "flex", alignItems: "center" }}>
                {brand.svg}
              </div>
              {/* Divider between items */}
              {i < BRANDS.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    width: 1,
                    height: 18,
                    background: "rgba(59,36,51,0.14)",
                    marginLeft: 40,
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
