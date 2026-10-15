"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../ui/Button";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#why-us", label: "Why ProFlow" },
  { href: "/contact", label: "Contact" },
];

/**
 * Header
 * Responsive site header with logo placeholder, desktop navigation,
 * mobile drawer/toggle, and prominent 24/7 emergency call CTA.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoImgError, setLogoImgError] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Keyboard navigation & Esc listener
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && mobileMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <header className={styles.header} onKeyDown={handleKeyDown}>
      <div className={`container ${styles.inner}`}>
        {/* Brand / Logo */}
        <Link href="/" className={styles.logoLink} onClick={closeMobileMenu}>
          {!logoImgError ? (
            <Image
              src="/images/proflow-logo.png"
              alt="ProFlow Plumbing Logo"
              width={160}
              height={44}
              priority
              onError={() => setLogoImgError(true)}
              className={styles.brandLogoImg}
            />
          ) : (
            <>
              <span className={styles.logoMark} aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </span>
              <span className={styles.logoText}>
                ProFlow<span className={styles.logoAccent}>Plumbing</span>
              </span>
            </>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions (Call CTA & Mobile Menu Toggle) */}
        <div className={styles.actions}>
          <div className={styles.phoneGroup}>
            <span className={styles.badge247}>24/7 Rapid Response</span>
            <a
              href="tel:5550199"
              className={styles.phoneLink}
              aria-label="Demo phone: Call dispatch at (555) 0199"
            >
              <svg
                className={styles.phoneIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className={styles.phoneDigits}>(555) 0199</span>
            </a>
          </div>

          <Button
            href="tel:5550199"
            variant="primary"
            className={styles.callButton}
          >
            Call Now
          </Button>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
          >
            <span className={styles.hamburgerIcon} aria-hidden="true">
              <span className={`${styles.barLine} ${mobileMenuOpen ? styles.barLineTopActive : ""}`} />
              <span className={`${styles.barLine} ${mobileMenuOpen ? styles.barLineMiddleActive : ""}`} />
              <span className={`${styles.barLine} ${mobileMenuOpen ? styles.barLineBottomActive : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={`container ${styles.mobileInner}`}>
          <nav aria-label="Mobile Navigation">
            <ul className={styles.mobileNavList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileCtaBox}>
            <div className={styles.mobileCtaNotice}>24/7 Emergency Dispatch Available</div>
            <a href="tel:5550199" className={styles.mobilePhoneLink}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(555) 0199</span>
            </a>
            <Button
              href="tel:5550199"
              variant="primary"
              className={styles.mobileCallBtn}
              onClick={closeMobileMenu}
            >
              Call 24/7 Emergency Team
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
