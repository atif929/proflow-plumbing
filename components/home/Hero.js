import Button from "../ui/Button";
import PlaceholderImage from "../ui/PlaceholderImage";
import styles from "./Hero.module.css";

/**
 * Hero Section
 * Exactly matched to reference:
 * - Two-line headline: "Quality Plumbing \n When You Need It Most"
 * - Subtext: "From urgent repairs to planned installations, \n we keep your water flowing."
 * - Two rounded pill CTAs: "Call (555) 0199" (teal) and "View Our Services" (outlined teal)
 * - Three trust items: Shield (Trusted Professionals), Clock (24/7 Emergency Service), House (Residential & Commercial)
 * - Van & technician photo bleeding to right edge with seamless soft gradient fade
 */
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContainer}>
        {/* Left Column: Content (approx 45% width) */}
        <div className={styles.content}>
          <h1 id="hero-heading" className={styles.title}>
            Quality Plumbing<br />When You Need It Most
          </h1>

          <p className={styles.lead}>
            From urgent repairs to planned installations,<br className={styles.breakDesktop} />
            we keep your water flowing.
          </p>

          <div className={styles.ctaGroup}>
            <Button href="tel:5550199" variant="primary" className={styles.primaryCta}>
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
                className={styles.phoneIcon}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call (555) 0199</span>
            </Button>

            <Button href="/services" variant="secondary" className={styles.secondaryCta}>
              <span>View Our Services</span>
            </Button>
          </div>

          {/* Three trust highlights */}
          <div className={styles.trustStrip}>
            {/* Shield */}
            <div className={styles.trustItem}>
              <span className={styles.trustIcon} aria-hidden="true">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </span>
              <span className={styles.trustText}>
                Trusted<br />Professionals
              </span>
            </div>

            {/* Clock */}
            <div className={styles.trustItem}>
              <span className={styles.trustIcon} aria-hidden="true">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 15 14" />
                </svg>
              </span>
              <span className={styles.trustText}>
                24/7<br />Emergency Service
              </span>
            </div>

            {/* House */}
            <div className={styles.trustItem}>
              <span className={styles.trustIcon} aria-hidden="true">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5L12 3l9 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20.5v-11z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </span>
              <span className={styles.trustText}>
                Residential &amp;<br />Commercial
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Full-height photograph bleeding seamlessly into hero */}
        <div className={styles.mediaContainer}>
          <div className={styles.mediaFrame} aria-label="ProFlow plumbing service van and technician">
            <PlaceholderImage
              src="/images/hero-plumber.png"
              alt="ProFlow Plumbing branded service van and technician on site"
              width={1600}
              height={900}
              filename="hero-plumbing-van.png"
              hint="ProFlow Plumbing service van and technician"
              priority={true}
              variant="landscape"
              className={styles.heroImgWrapper}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
