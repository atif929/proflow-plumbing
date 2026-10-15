import localFont from "next/font/local";
import "./globals.css";

const lato = localFont({
  src: [
    { path: "./fonts/lato-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/lato-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/lato-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-lato",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata = {
  title: "ProFlow Plumbing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
