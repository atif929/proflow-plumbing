import Link from "next/link";
import Button from "../ui/Button";
import PlaceholderImage from "../ui/PlaceholderImage";
import styles from "./ServicesOverview.module.css";

const CORE_SERVICES = [
  {
    id: "emergency-repairs",
    title: "Emergency Repairs",
    desc: "Rapid containment and repair for active water leaks, burst pipes, overflow hazards, and urgent residential shutdowns.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    badge: "24/7 Dispatch",
    imagePlaceholder: "services/emergency-repairs.jpg",
  },
  {
    id: "drain-clearing",
    title: "Drain Cleaning & Unblocking",
    desc: "Motorized cabling and high-pressure jetting to safely clear stubborn clogs in sinks, showers, laundry tubs, and mainline sewers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="M12 7a5 5 0 0 1 5 5" />
      </svg>
    ),
    badge: "Diagnostic Tooling",
    imagePlaceholder: "services/drain-clearing.jpg",
  },
  {
    id: "hot-water",
    title: "Hot Water Systems",
    desc: "Troubleshooting, component replacements, thermostat repairs, and full modern installations for electric, gas, and heat pump units.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    badge: "Efficiency Focused",
    imagePlaceholder: "services/hot-water.jpg",
  },
  {
    id: "leak-detection",
    title: "Pipe Inspection & Leak Detection",
    desc: "Non-invasive electronic acoustic testing and camera diagnostics to isolate hidden wall, floor, or underground line leaks before structural damage.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12h20" />
        <path d="M20 12a8 8 0 0 1-8 8H4" />
        <circle cx="12" cy="8" r="4" />
      </svg>
    ),
    badge: "Non-Invasive",
    imagePlaceholder: "services/leak-detection.jpg",
  },
  {
    id: "fixture-upgrades",
    title: "Fixtures & Tapware Installation",
    desc: "Modernizing kitchens and bathrooms with water-saving tapware, vanity basins, toilets, mixer taps, and dependable shutoff valves.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2v7a6 6 0 0 0 6 6v7" />
        <path d="M12 15h6a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-4" />
      </svg>
    ),
    badge: "Renovations & Retrofit",
    imagePlaceholder: "services/fixture-upgrades.jpg",
  },
  {
    id: "preventative-maintenance",
    title: "Preventative Maintenance",
    desc: "Proactive plumbing wellness checks, pressure tests, backflow testing, and sediment flush procedures to avoid unexpected disruptions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    badge: "Preventative Care",
    imagePlaceholder: "services/preventative-maintenance.jpg",
  },
];

/**
 * ServicesOverview
 * Showcase of primary plumbing services with varied responsive cards
 * and clear navigation links to the future Services page.
 */
export default function ServicesOverview() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.kicker}>Residential &amp; Emergency Solutions</div>
          <h2 id="services-heading" className={styles.title}>
            Comprehensive Plumbing Services
          </h2>
          <p className={styles.lead}>
            Whether dealing with an urgent flood emergency or planning an upgrade,
            our team handles residential plumbing needs with precision, care, and transparent pricing.
          </p>
        </div>

        <div className={styles.grid}>
          {CORE_SERVICES.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.cardMedia}>
                {/*
                  IMAGE PLACEHOLDER DOCUMENTATION:
                  File target: /public/images/${service.imagePlaceholder}
                  Recommended Dimensions: 800 x 520 px (16:10 or 3:2 ratio)
                  Content: High-resolution residential plumbing action shot matching ${service.title}
                */}
                <PlaceholderImage
                  src={`/images/${service.imagePlaceholder}`}
                  alt={`Demonstration image for ${service.title}`}
                  width={800}
                  height={520}
                  filename={service.imagePlaceholder}
                  hint={service.title}
                  variant="landscape"
                />
                <span className={styles.badge}>{service.badge}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.iconHeadingRow}>
                  <div className={styles.iconWrap}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <Link href="#contact" className={styles.serviceLink}>
                  <span>Inquire about this service</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footerRow}>
          <p className={styles.footerNote}>
            Need a custom installation or commercial quote? View all plumbing capabilities on our dedicated services page.
          </p>
          <Button href="/services" variant="secondary" className={styles.servicesPageBtn}>
            View Full Service Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}
