import Link from "next/link";

export const metadata = {
  title: "Page Not Found | ProFlow Plumbing",
};

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "6rem 1.5rem", fontFamily: "var(--font-sans, sans-serif)" }}>
      <h1 style={{ fontSize: "3rem", color: "var(--color-navy, #123047)", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.125rem", color: "var(--color-slate, #253746)", marginBottom: "2rem" }}>
        Sorry, we couldn&apos;t find that page.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.75rem",
          background: "var(--color-teal-dark, #0a7c78)",
          color: "#fff",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
