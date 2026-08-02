"use client";

import { useViewport } from "@/hooks/useViewport";
import { useLanguage } from "@/hooks/useLanguage";

const STEPS = {
  vi: [
    { num: "01", title: "Brief",     desc: "Tiếp nhận thông tin và mục tiêu chương trình. Hiểu rõ nhu cầu và mong đợi của khách hàng." },
    { num: "02", title: "Research",  desc: "Nghiên cứu thương hiệu, khách mời và đối tượng tham dự để xây dựng nội dung phù hợp." },
    { num: "03", title: "Script",    desc: "Chuẩn bị lời dẫn và phối hợp cùng ban tổ chức để đảm bảo nội dung sắc sảo, mạch lạc và cảm xúc." },
    { num: "04", title: "Rehearsal", desc: "Kiểm tra timeline, âm thanh, ánh sáng và tổng duyệt cùng toàn bộ ekip." },
    { num: "05", title: "On Stage",  desc: "Điều phối chương trình với sự linh hoạt, tự tin và chuyên nghiệp để mang đến trải nghiệm tuyệt vời nhất." },
  ],
  zh: [
    { num: "01", title: "Brief",     desc: "接收活动信息与目标，深入了解客户需求与期望。" },
    { num: "02", title: "Research",  desc: "研究品牌、嘉宾与参会对象，构建合适内容方向。" },
    { num: "03", title: "Script",    desc: "准备主持稿，与主办方密切配合，确保内容精炼、流畅且富有情感。" },
    { num: "04", title: "Rehearsal", desc: "检查流程时间表、音响、灯光，并与全体团队进行总彩排。" },
    { num: "05", title: "On Stage",  desc: "以专业、自信、灵活的态度掌控全场，带来最精彩的体验。" },
  ],
};

const COPY = {
  vi: {
    kicker: "QUY TRÌNH LÀM VIỆC",
    titleLine1: "Quy trình",
    titleLine2: "làm việc",
    script: "Chỉnh chu trong từng chi tiết,\ntrọn vẹn trong từng khoảnh khắc.",
  },
  zh: {
    kicker: "合作流程",
    titleLine1: "工作",
    titleLine2: "流程",
    script: "细节严谨周到，\n每个瞬间都精心呈现。",
  },
} as const;

export default function Process() {
  const { isMobile } = useViewport();
  const { lang } = useLanguage();
  const copy = COPY[lang];
  const steps = STEPS[lang];

  return (
    <section
      id="quytrinh"
      style={{
        position: "relative",
        width: "100%",
        background: "#F7F2ED",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,142,94,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1220,
          margin: "0 auto",
          padding: isMobile ? "48px 24px 56px" : "72px 48px 72px",
          boxSizing: "border-box",
        }}
      >
        {/* ── HEADER ROW: Left = title, Right = script tagline ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 16 : 48,
            marginBottom: isMobile ? 36 : 52,
            alignItems: "flex-end",
          }}
        >
          {/* Left: Kicker + Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontSize: 11,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#B88E5E",
              }}
            >
              <span style={{ width: 28, height: 1, background: "#B88E5E" }} />
              <span>{copy.kicker}</span>
              <span style={{ width: 28, height: 1, background: "#B88E5E" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: isMobile ? "clamp(40px, 10vw, 56px)" : "clamp(40px, 4.8vw, 60px)",
                lineHeight: 1.08,
                letterSpacing: "-0.018em",
                color: "#3B2433",
                margin: 0,
              }}
            >
              {copy.titleLine1}
              <br />
              {copy.titleLine2}
            </h2>
          </div>

          {/* Right: Cursive tagline aligned to bottom */}
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: isMobile ? 22 : "clamp(20px, 2vw, 28px)",
              lineHeight: 1.5,
              color: "#B88E5E",
              margin: 0,
              whiteSpace: "pre-line",
              paddingBottom: isMobile ? 0 : 6,
            }}
          >
            {copy.script}
          </p>
        </div>

        {/* ── 5 STEPS: Horizontal columns ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)",
            borderTop: "1px solid rgba(59, 36, 51, 0.12)",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: isMobile ? "flex-start" : "flex-start",
                gap: isMobile ? 16 : 0,
                padding: isMobile ? "24px 0" : "28px 24px 32px 0",
                paddingLeft: isMobile ? 0 : i === 0 ? 0 : 24,
                borderBottom: isMobile ? "1px solid rgba(59, 36, 51, 0.1)" : "none",
                borderRight: !isMobile && i < steps.length - 1
                  ? "1px solid rgba(59, 36, 51, 0.1)"
                  : "none",
              }}
            >
              {/* Step number */}
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontSize: isMobile ? 36 : "clamp(40px, 3.8vw, 52px)",
                  lineHeight: 1,
                  color: "#B88E5E",
                  flexShrink: 0,
                  minWidth: isMobile ? 54 : undefined,
                  display: "block",
                  marginBottom: isMobile ? 0 : 14,
                }}
              >
                {step.num}
              </span>

              {/* Content block */}
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {/* Thin pink accent bar (desktop) */}
                {!isMobile && (
                  <span
                    style={{
                      display: "block",
                      width: 22,
                      height: 1.5,
                      background: "#C9799A",
                      borderRadius: 1,
                      marginBottom: 6,
                    }}
                  />
                )}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: isMobile ? 18 : 19,
                    fontWeight: 500,
                    color: "#3B2433",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "#806F7C",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
