const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    className: "is-facebook",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    className: "is-instagram",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Zalo",
    href: "#",
    className: "is-zalo",
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
        {/* White speech bubble — matches Zalo mark */}
        <path
          fill="#ffffff"
          d="M10 12.2c0-2.9 2.3-5.2 5.2-5.2h17.6c2.9 0 5.2 2.3 5.2 5.2v14.2c0 2.9-2.3 5.2-5.2 5.2H24.4l-7.6 6.6c-.55.48-1.4.08-1.4-.65v-5.95h-.2c-2.9 0-5.2-2.3-5.2-5.2V12.2z"
        />
        <text
          x="24"
          y="23.2"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#0068FF"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
          fontSize="11.5"
          letterSpacing="-0.02em"
        >
          Zalo
        </text>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:",
    className: "is-email",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M4.2 7.2L12 12.6l7.8-5.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export default function SocialRail() {
  return (
    <div
      style={{
        position: "fixed",
        left: 22,
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
          height: 48,
          background: "linear-gradient(to bottom, transparent, rgba(47,30,44,.35))",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          padding: "14px 0",
        }}
      >
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className={`ml-social-rail-icon ${social.className}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <span
        style={{
          width: 1,
          height: 48,
          background: "linear-gradient(to top, transparent, rgba(47,30,44,.35))",
        }}
      />
    </div>
  );
}
