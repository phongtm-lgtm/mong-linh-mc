import type { CSSProperties } from "react";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  script?: string;
  /** "light" = section nền kem (chữ ink), "dark" = section nền tím (chữ cream) */
  tone: "light" | "dark";
  align?: "left" | "center";
  /** Điểm 1-2 sparkle nhỏ cạnh tiêu đề — dùng tiết chế cho vài section nổi bật */
  sparkle?: boolean;
  style?: CSSProperties;
};

/**
 * Header chuẩn cho mọi section: kicker uppercase + tiêu đề serif + script subline.
 * Giữ đúng một scale typography trên toàn trang.
 */
export default function SectionHeader({
  kicker,
  title,
  script,
  tone,
  align = "left",
  sparkle = false,
  style,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        gap: 12,
        ...style,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontFamily: "'Be Vietnam Pro',sans-serif",
          fontSize: 11,
          letterSpacing: ".28em",
          textTransform: "uppercase",
          fontWeight: 600,
          color: tone === "dark" ? "var(--accent-gold)" : "#A8874F",
        }}
      >
        <span
          aria-hidden="true"
          style={{ width: 28, height: 1, background: tone === "dark" ? "var(--accent-gold)" : "#A8874F" }}
        />
        {kicker}
        {align === "center" && (
          <span
            aria-hidden="true"
            style={{ width: 28, height: 1, background: tone === "dark" ? "var(--accent-gold)" : "#A8874F" }}
          />
        )}
      </span>

      <h2
        style={{
          position: "relative",
          fontFamily: "'Playfair Display',serif",
          fontWeight: 500,
          fontSize: "clamp(34px, 4.2vw, 52px)",
          lineHeight: 1.12,
          letterSpacing: "-0.01em",
          color: "var(--text-primary)",
          margin: 0,
        }}
      >
        {title}
        {sparkle && (
          <span
            aria-hidden="true"
            className="ml-hero-sparkle"
            style={{
              position: "absolute",
              top: "-0.35em",
              [align === "center" ? "insetInlineEnd" : "insetInlineStart"]: "-0.5em",
              fontSize: "0.28em",
              color: "var(--accent-cta)",
              opacity: 0.75,
              display: "inline-block",
            }}
          >
            ✦
          </span>
        )}
      </h2>

      {script && (
        <p
          style={{
            fontFamily: "'Great Vibes',cursive",
            fontWeight: 400,
            fontSize: "clamp(22px, 2.2vw, 30px)",
            lineHeight: 1.3,
            color: tone === "dark" ? "var(--accent-gold)" : "#A8874F",
            margin: 0,
          }}
        >
          {script}
        </p>
      )}
    </div>
  );
}
