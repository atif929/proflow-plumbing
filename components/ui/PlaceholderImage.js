"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PlaceholderImage.module.css";

/**
 * PlaceholderImage
 * Tries to load a real image via next/image. If the file is missing (404 / load error),
 * gracefully degrades to a branded SVG placeholder so the layout never collapses.
 *
 * Props:
 *  src          – image path relative to /public (e.g. "/images/hero-plumber.jpg")
 *  alt          – descriptive alt text for screen readers
 *  width        – intrinsic pixel width of the real image
 *  height       – intrinsic pixel height of the real image
 *  filename     – short filename label shown in the placeholder badge (e.g. "hero-plumber.jpg")
 *  hint         – one-line description shown in the placeholder (e.g. "Plumber on-site")
 *  priority     – pass true for LCP images (hero)
 *  className    – extra class applied to the wrapper <div>
 *  fill         – if true, uses next/image fill mode (parent must be position:relative + sized)
 *  variant      – "portrait" | "landscape" | "square" — controls placeholder icon & aspect
 */
export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  filename,
  hint,
  priority = false,
  className = "",
  fill = false,
  variant = "landscape",
}) {
  const [hasError, setHasError] = useState(false);

  const displayName = filename || (src ? src.split("/").pop() : "image-placeholder");

  if (!hasError && src) {
    return (
      <div className={`${styles.wrapper} ${className}`} data-variant={variant}>
        {fill ? (
          <Image
            src={src}
            alt={alt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.img}
            priority={priority}
            onError={() => setHasError(true)}
          />
        ) : (
          <Image
            src={src}
            alt={alt || ""}
            width={width || 800}
            height={height || 600}
            className={styles.img}
            priority={priority}
            onError={() => setHasError(true)}
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </div>
    );
  }

  /* ── Branded fallback placeholder ── */
  return (
    <div
      className={`${styles.placeholder} ${className}`}
      data-variant={variant}
      role="img"
      aria-label={alt || `Image placeholder: ${displayName}`}
    >
      <div className={styles.placeholderInner} aria-hidden="true">
        <PlaceholderIcon variant={variant} />
        <span className={styles.badge}>{displayName}</span>
        {width && height && (
          <span className={styles.dims}>{width} × {height}px</span>
        )}
        {hint && <p className={styles.hint}>{hint}</p>}
      </div>
    </div>
  );
}

/** Simple inline SVG icons per variant */
function PlaceholderIcon({ variant }) {
  if (variant === "portrait") {
    return (
      <svg
        className={styles.icon}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }
  if (variant === "square") {
    return (
      <svg
        className={styles.icon}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    );
  }
  /* landscape (default) — wrench / plumbing icon */
  return (
    <svg
      className={styles.icon}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
