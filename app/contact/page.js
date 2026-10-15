import Link from "next/link";
import styles from "./ContactPage.module.css";
import Button from "../../components/ui/Button";
import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ContactForm from "../../components/contact/ContactForm";

export const metadata = {
  title: "Contact & Emergency Dispatch | ProFlow Plumbing",
  description:
    "Get in touch with ProFlow Plumbing. 24/7 emergency dispatch line, online consultation requests, and service inquiry guidance.",
};

const INQUIRY_CHECKLIST = [
  {
    title: "Exact Location & Access",
    desc: "Where is the problem occurring (e.g. upstairs bathroom, ground-floor slab, front lawn, kitchen island)?",
  },
  {
    title: "Visible Symptoms & Severity",
    desc: "Is there active spraying or standing water, or is it an intermittent drip, low pressure, or gurgling drain?",
  },
  {
    title: "Isolation Status",
    desc: "Have you located and turned off the main isolation valve or fixture stopcock to prevent escalating damage?",
  },
  {
    title: "Fixture Brand / Age (If Known)",
    desc: "For hot water units or specialized tapware, knowing the model number or tank age helps our team prepare appropriate parts.",
  },
];

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Page Hero Introduction */}
        <section className={styles.heroSection} aria-labelledby="contact-heading">
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
                  Contact
                </li>
              </ol>
            </nav>

            <div className={styles.heroContent}>
              <div className={styles.kicker}>Direct Customer Support &amp; Dispatch</div>
              <h1 id="contact-heading" className={styles.heroTitle}>
                Get in Touch with ProFlow Plumbing
              </h1>
              <p className={styles.heroLead}>
                Have an urgent plumbing emergency or planning an upgrade? Contact our team by phone
                for immediate assistance or submit an online inquiry for scheduled service consultations.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area: Split Contact Info & Form Grid */}
        <section className={styles.contentSection} aria-label="Contact options and inquiry form">
          <div className="container">
            <div className={styles.splitLayout}>
              {/* Left Column: Direct Contact Information & Emergency Callout */}
              <div className={styles.infoCol}>
                {/* Emergency Urgent Banner */}
                <div className={styles.emergencyCard}>
                  <div className={styles.emergencyTagRow}>
                    <span className={styles.pulseDot} aria-hidden="true" />
                    <span className={styles.emergencyTag}>24/7 Urgent Dispatch</span>
                  </div>
                  <h2 className={styles.emergencyHeading}>Facing an active plumbing emergency?</h2>
                  <p className={styles.emergencyText}>
                    Active pipe bursts, severe sewer overflows, and major leaks require immediate
                    attention. For urgent response, please call our dispatch line rather than submitting
                    an online form.
                  </p>
                  <a
                    href="tel:5550199"
                    className={styles.emergencyPhoneBtn}
                    aria-label="Call emergency dispatch line at (555) 0199"
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
                    <div className={styles.emergencyPhoneText}>
                      <span className={styles.phoneLabel}>Call Now (24/7 Priority)</span>
                      <span className={styles.phoneDigits}>(555) 0199</span>
                    </div>
                  </a>
                </div>

                {/* Direct Contact Details Card */}
                <div className={styles.detailsCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.detailsBadge}>Demonstration Placeholders</span>
                    <h3 className={styles.detailsTitle}>Depot &amp; Office Details</h3>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.itemIcon} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className={styles.itemBody}>
                      <span className={styles.itemLabel}>Telephone Dispatch:</span>
                      <a href="tel:5550199" className={styles.itemValueLink}>
                        (555) 0199
                      </a>
                      <span className={styles.itemSub}>Demo placeholder · 24/7 priority line</span>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.itemIcon} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className={styles.itemBody}>
                      <span className={styles.itemLabel}>Email Inquiries:</span>
                      <span className={styles.itemValue}>dispatch@proflow-example.demo</span>
                      <span className={styles.itemSub}>Monitored during office service hours</span>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.itemIcon} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className={styles.itemBody}>
                      <span className={styles.itemLabel}>Service Depot:</span>
                      <span className={styles.itemValue}>
                        Placeholder Industrial Suite, Demonstration City, DC 00000
                      </span>
                      <span className={styles.itemSub}>Fictional address · Showcase depot</span>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.itemIcon} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className={styles.itemBody}>
                      <span className={styles.itemLabel}>Operating Hours:</span>
                      <span className={styles.itemValue}>Emergency: 24/7/365 On-Call</span>
                      <span className={styles.itemSub}>Office &amp; Consultations: Mon–Fri 7:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Service Navigation Jump Card */}
                <div className={styles.navCard}>
                  <h3 className={styles.navCardTitle}>Explore Related Services</h3>
                  <p className={styles.navCardDesc}>
                    Need specific details about what our technicians handle before booking?
                  </p>
                  <div className={styles.navLinksRow}>
                    <Button href="/services" variant="secondary" className={styles.navLinkBtn}>
                      View Services Catalog
                    </Button>
                    <Button href="/about" variant="secondary" className={styles.navLinkBtn}>
                      Learn About Our Team
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Demonstration Form */}
              <div className={styles.formCol}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Closing Guidance Section */}
        <section className={styles.guideSection} aria-labelledby="guide-heading">
          <div className="container">
            <div className={styles.guideBox}>
              <div className={styles.guideHeader}>
                <div className={styles.kicker}>Helpful Tips for Faster Service</div>
                <h2 id="guide-heading" className={styles.guideTitle}>
                  What to Include in Your Plumbing Enquiry
                </h2>
                <p className={styles.guideLead}>
                  Providing clear information upfront allows our technicians to arrive equipped with
                  the right tools and replacement parts. Here is a helpful checklist:
                </p>
              </div>

              <div className={styles.guideGrid}>
                {INQUIRY_CHECKLIST.map((item, idx) => (
                  <div key={idx} className={styles.guideCard}>
                    <div className={styles.guideCardNum}>0{idx + 1}</div>
                    <h3 className={styles.guideCardTitle}>{item.title}</h3>
                    <p className={styles.guideCardDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
