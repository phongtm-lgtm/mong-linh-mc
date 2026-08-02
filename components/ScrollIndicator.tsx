export default function ScrollIndicator() {
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translateY(-50%) rotate(90deg)",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 10, letterSpacing: ".4em", color: "var(--nav-muted)" }}>
        SCROLL
      </span>
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--accent-gold)",
          animation: "pulse 1.8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
