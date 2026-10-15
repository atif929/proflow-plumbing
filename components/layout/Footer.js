import Link from "next/link";
import styles from "./Footer.module.css";

const FOOTER_NAV = {
  services: [
    { label: "Emergency Plumbing", href: "/services#emergency-plumbing" },
    { label: "Leak Detection & Pipe Repairs", href: "/services#leak-detection" },
    { label: "Blocked Drains & Jetting", href: "/services#blocked-drains" },
    { label: "Tap & Toilet Fixture Repairs", href: "/services#tap-toilet-fixtures" },
    { label: "Hot Water System Services", href: "/services#hot-water-systems" },
    { label: "Installations & Upgrades", href: "/services#installations-upgrades" },
  ],
  company: [
    { label: "About ProFlow", href: "/about" },
    { label: "Why Choose ProFlow", href: "/#why-us" },
    { label: "Demonstration Team", href: "/about#team" },
    { label: "Full Service Catalog", href: "/services" },
  ],
  contactPlaceholder: {
    phone: "(555) 0199",
    email: "dispatch@proflow-example.demo",
    address: "Placeholder Industrial Suite, Demonstration City, DC 00000",
    hours: "24/7 Priority Emergency Service · Office: Mon–Fri 7am–6pm",
  },
};

/**
 * Footer
 * Complete website footer with navigation, service links,
 * agency showcase attribution, and clearly marked demo contact placeholders.
 */
export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className="container">
        {/* Main Footer Content Grid */}
        <div className={styles.topGrid}>
          {/* Brand & Demo Disclaimer Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoMark} aria-hidden="true">
                <svg
                  width="22"
                  height="22"
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
            </Link>

            <p className={styles.tagline}>
              &ldquo;Plumbing problems don&apos;t wait. Neither do we.&rdquo;
            </p>

            <p className={styles.demoNotice}>
              <strong>Demo Disclaimer:</strong> ProFlow Plumbing is a fictional showcase website
              developed for CimpleTech portfolio demonstration. All phone numbers, addresses,
              and profiles are demonstration placeholders.
            </p>
          </div>

          {/* Plumbing Services Column */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Plumbing Services</h3>
            <ul className={styles.linkList}>
              {FOOTER_NAV.services.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company / Information Column */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Company &amp; Overview</h3>
            <ul className={styles.linkList}>
              {FOOTER_NAV.company.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Clearly Marked Placeholders) */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contact &amp; Dispatch</h3>
            <div className={styles.placeholderTag}>Demonstration Placeholders</div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Emergency Dispatch:</span>
              <a href="tel:5550199" className={styles.contactValuePhone}>
                {FOOTER_NAV.contactPlaceholder.phone}
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Inquiry Email:</span>
              <span className={styles.contactValue}>
                {FOOTER_NAV.contactPlaceholder.email}
              </span>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Service Depot:</span>
              <span className={styles.contactValue}>
                {FOOTER_NAV.contactPlaceholder.address}
              </span>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Hours:</span>
              <span className={styles.contactValue}>
                {FOOTER_NAV.contactPlaceholder.hours}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} ProFlow Plumbing Demo. Developed for CimpleTech Agency Showcase.
          </p>

          <div className={styles.bottomLinks}>
            <span>Built with Next.js App Router &amp; CSS Modules</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
