import Link from "next/link";
import styles from "./ServicesPage.module.css";
import Button from "../../components/ui/Button";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { SERVICES_CATALOG } from "../../data/services";

export const metadata = {
  title: "Plumbing Services | ProFlow Plumbing",
  description:
    "Comprehensive residential and emergency plumbing services: leak detection, blocked drains, fixture repairs, hot water units, and installations.",
};

const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Direct Triage & Booking",
    desc: "Contact our dispatch team via phone or inquiry. We quickly assess the urgency, clarify symptoms, and schedule a confirmed arrival window.",
  },
  {
    step: "02",
    title: "Diagnostic Investigation",
    desc: "A technician inspects the system on-site using CCTV cameras, acoustic sensors, and pressure testing to identify root causes.",
  },
  {
    step: "03",
    title: "Transparent Written Scope",
    desc: "We present a clear, itemized repair plan and fixed quote before starting work so you know exactly what is involved.",
  },
  {
    step: "04",
    title: "Precision Repair & Cleanup",
    desc: "Work is carried out cleanly with protective floor coverings, followed by thorough pressure testing and workspace sanitization.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main-content" className={styles.main}>
      {/* 1. Page Introduction / Hero Header */}
      <section className={styles.heroSection} aria-labelledby="services-page-title">
        <div className="container">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol className={styles.breadcrumbList}>
              <li>
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className={styles.breadcrumbSeparator}>
                /
              </li>
              <li aria-current="page" className={styles.breadcrumbCurrent}>
                Services
              </li>
            </ol>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.kicker}>Professional Plumbing Solutions</div>
            <h1 id="services-page-title" className={styles.heroTitle}>
              Plumbing Services Built for Dependability
            </h1>
            <p className={styles.heroLead}>
              From critical emergencies and hidden leak detection to hot water systems and complete
              bathroom fixture upgrades, explore our range of precision residential plumbing services.
            </p>

            <div className={styles.heroCtaGroup}>
              <Button href="tel:5550199" variant="primary" className={styles.primaryBtn}>
                <svg
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
                <span>Emergency Dispatch: (555) 0199</span>
              </Button>
              <Button href="/#contact" variant="secondary" className={styles.secondaryBtn}>
                Book Non-Urgent Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Anchor Bar */}
      <nav aria-label="Services quick jump" className={styles.jumpBar}>
        <div className="container">
          <div className={styles.jumpInner}>
            <span className={styles.jumpLabel}>Jump to Service:</span>
            <ul className={styles.jumpList}>
              {SERVICES_CATALOG.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.jumpLink}>
                    {item.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* 2 & 3. Detailed Service Sections (Varied alternating layouts) */}
      <section className={styles.catalogSection} aria-label="Service Details Catalog">
        <div className="container">
          <div className={styles.servicesStack}>
            {SERVICES_CATALOG.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className={`${styles.serviceArticle} ${isEven ? styles.serviceArticleAlt : ""}`}
                >
                  <div className={styles.articleGrid}>
                    {/* Visual Media Placeholder Column */}
                    <div className={styles.mediaCol}>
                      <div className={styles.mediaFrame}>
                        {/*
                          IMAGE PLACEHOLDER DOCUMENTATION:
                          Target file: /public/images/${service.imagePath}
                          Suggested search terms: "${service.suggestedImage}"
                          Dimensions: ${service.dimensions}
                          Content: Action shot showcasing ${service.title} in real home environment.
                        */}
                        <PlaceholderImage
                          src={`/images/${service.imagePath}`}
                          alt={`Demonstration photo for ${service.title}`}
                          width={1000}
                          height={750}
                          filename={service.imagePath}
                          hint={service.title}
                          variant="landscape"
                        />
                      </div>
                    </div>

                    {/* Content & Practical Examples Column */}
                    <div className={styles.contentCol}>
                      <div className={styles.badgeRow}>
                        <span className={styles.badge}>{service.badge}</span>
                        <span className={styles.serviceIndex}>Service 0{index + 1}</span>
                      </div>

                      <h2 className={styles.serviceHeading}>{service.title}</h2>
                      <p className={styles.serviceSummary}>{service.summary}</p>
                      <p className={styles.serviceOverview}>{service.overview}</p>

                      <div className={styles.examplesBox}>
                        <h3 className={styles.examplesTitle}>Common Practical Examples:</h3>
                        <ul className={styles.examplesList}>
                          {service.practicalExamples.map((ex, i) => (
                            <li key={i} className={styles.exampleItem}>
                              <svg
                                className={styles.checkIcon}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.actionRow}>
                        <Button href="/#contact" variant="primary" className={styles.inquireBtn}>
                          Inquire for {service.shortTitle}
                        </Button>
                        <a href="tel:5550199" className={styles.emergencyDirectLink}>
                          <span>Urgent? Call (555) 0199</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How We Help Process Section */}
      <section className={styles.processSection} aria-labelledby="how-we-help-heading">
        <div className="container">
          <div className={styles.processHeader}>
            <div className={styles.kicker}>Our Operational Standard</div>
            <h2 id="how-we-help-heading" className={styles.processTitle}>
              How We Help: From First Call to Clean Finish
            </h2>
            <p className={styles.processLead}>
              We believe in respectful home care, clear scopes, and thorough technical diagnosis.
              Here is what happens every time you engage ProFlow for plumbing repairs or upgrades.
            </p>
          </div>

          <div className={styles.processGrid}>
            {SERVICE_PROCESS.map((step) => (
              <div key={step.step} className={styles.processCard}>
                <div className={styles.processNumRow}>
                  <span className={styles.processStepNum}>{step.step}</span>
                  <span className={styles.processDot} aria-hidden="true" />
                </div>
                <h3 className={styles.processCardTitle}>{step.title}</h3>
                <p className={styles.processCardDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Emergency CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="emergency-cta-title">
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaKicker}>24/7 Urgent Dispatch Available</span>
              <h2 id="emergency-cta-title" className={styles.ctaTitle}>
                Plumbing Problems Don&apos;t Wait. Neither Do We.
              </h2>
              <p className={styles.ctaText}>
                Active water leaks, overflowing fixtures, and blocked drains cause escalating home
                damage every hour they are ignored. Reach out to our emergency dispatch line for
                prompt assistance.
              </p>
            </div>

            <div className={styles.ctaButtonGroup}>
              <a
                href="tel:5550199"
                className={styles.ctaCallButton}
                aria-label="Call emergency dispatch at (555) 0199"
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
                <div className={styles.ctaCallText}>
                  <span className={styles.ctaCallTag}>Priority Line</span>
                  <span className={styles.ctaCallDigits}>(555) 0199</span>
                </div>
              </a>

              <Button href="/#contact" variant="secondary" className={styles.ctaOnlineBtn}>
                Send Online Inquiry
              </Button>
            </div>
          </div>

          <div className={styles.returnRow}>
            <Link href="/" className={styles.homeLink}>
              ← Return to ProFlow Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}
