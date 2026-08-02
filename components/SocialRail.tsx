export default function SocialRail() {
  return (
    <div
      style={{
        position: "fixed",
        left: 36,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span
        style={{
          width: 1,
          height: 72,
          background: "linear-gradient(to bottom, transparent, rgba(196,164,106,.45))",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
          padding: "14px 0",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            background: "rgba(255,248,251,.22)",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <a
          href="#"
          aria-label="Facebook"
          className="ml-social-icon"
          style={iconLinkStyle}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="ml-social-icon"
          style={iconLinkStyle}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="ml-social-icon"
          style={iconLinkStyle}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4.2a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3zM20.3 20h-2.8v-5.6c0-1.3 0-3-1.85-3s-2.15 1.4-2.15 2.9V20H10.7V9.5h2.7v1.4h.04c.38-.72 1.3-1.48 2.68-1.48 2.86 0 3.38 1.88 3.38 4.33V20z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="TikTok"
          className="ml-social-icon"
          style={iconLinkStyle}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.07-2.77V9.4A6.34 6.34 0 1 0 15.8 15.5V8.41a8.3 8.3 0 0 0 4.25 1.18V6.14a4.8 4.8 0 0 1-.46.55z" />
          </svg>
        </a>
      </div>
      <span
        style={{
          width: 1,
          height: 72,
          background: "linear-gradient(to top, transparent, rgba(196,164,106,.45))",
        }}
      />
    </div>
  );
}

const iconLinkStyle = {
  position: "relative" as const,
  zIndex: 1,
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "transparent",
  color: "var(--nav-muted)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "color .2s ease, transform .2s ease",
};
