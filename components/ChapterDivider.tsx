type ChapterDividerProps = {
  /** Màu nền của chương phía trên (lộ ra ở đáy đường cong) */
  from: string;
  /** Màu của chương phía dưới (đổ đầy hình sóng) */
  to: string;
  height?: number;
};

/**
 * Đường cong SVG chuyển tiếp giữa 2 chương nền — thay cho đường thẳng cứng.
 */
export default function ChapterDivider({ from, to, height = 96 }: ChapterDividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        height,
        background: from,
        overflow: "hidden",
        lineHeight: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
