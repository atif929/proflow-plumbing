import Link from "next/link";
import styles from "./Button.module.css";

/**
 * Reusable button. Renders a Next.js <Link> when `href` is given, otherwise a <button>.
 * variant: "primary" (default) | "secondary"
 */
export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
