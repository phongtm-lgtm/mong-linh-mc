import Image from "next/image";
import type { CSSProperties } from "react";

type ImagePlaceholderProps = {
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
};

/**
 * Replaces the original design tool's <image-slot> custom element.
 * Renders a real image when `src` is provided, otherwise a soft
 * placeholder box sized to the parent — swap in a `src` later.
 */
export default function ImagePlaceholder({
  src,
  alt = "",
  fit = "cover",
  className,
  style,
  sizes,
  priority,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        style={{ objectFit: fit, ...style }}
        className={className}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, rgba(183,154,203,.18) 0%, rgba(183,154,203,.06) 100%)",
        ...style,
      }}
    />
  );
}
