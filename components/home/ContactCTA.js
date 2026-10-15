import Button from "../ui/Button";
import styles from "./ContactCTA.module.css";

/**
 * ContactCTA
 * High-conversion final consultation & emergency dispatch banner.
 * Styled with ProFlow deep navy background and responsive CTA layout.
 */
export default function ContactCTA() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.kicker}>Ready When You Need Us</div>
            <h2 id="cta-heading" className={styles.title}>
              Have a plumbing issue that needs attention?
            </h2>
            <p className={styles.description}>
              Whether you need rapid emergency containment or want an upfront quote for an upcoming
              installation, reach out to our team today for straightforward advice and prompt service.
            </p>

            <div className={styles.metaRow}>
              <div className={styles.metaPill}>
                <span className={styles.dot} aria-hidden="true" />
                <span>24/7 Emergency Line</span>
              </div>
              <div className={styles.metaPill}>
                <span className={styles.dot} aria-hidden="true" />
                <span>Upfront Written Estimates</span>
              </div>
              <div className={styles.metaPill}>
                <span className={styles.dot} aria-hidden="true" />
                <span>Residential &amp; Commercial</span>
              </div>
            </div>
          </div>

          <div className={styles.actionsCard}>
            <div className={styles.actionsHeader}>
              <span className={styles.actionsTag}>Direct Dispatch</span>
              <h3 className={styles.actionsTitle}>Immediate Assistance</h3>
            </div>

            <a
              href="tel:5550199"
              className={styles.phoneButton}
              aria-label="Demo dispatch phone: (555) 0199"
            >
              <svg
                width="22"
                height="22"
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
              <div className={styles.phoneText}>
                <span className={styles.phoneLabel}>Call 24/7 Dispatch</span>
                <span className={styles.phoneNumber}>(555) 0199</span>
              </div>
            </a>

            <div className={styles.divider}>
              <span>or send an inquiry</span>
            </div>

            <Button href="/contact" variant="secondary" className={styles.inquireBtn}>
              Schedule Consultation
            </Button>

            <p className={styles.disclaimer}>
              Demo project showcase. Phone numbers and contact forms are demonstration placeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
