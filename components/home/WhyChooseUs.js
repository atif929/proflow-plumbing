import Button from "../ui/Button";
import PlaceholderImage from "../ui/PlaceholderImage";
import styles from "./WhyChooseUs.module.css";

const PILLARS = [
  {
    num: "01",
    title: "Direct Communication & Real Updates",
    desc: "Plumbing stress is made worse by vague time windows. We confirm scheduled arrival slots and provide clear, plain-English progress updates before, during, and after service.",
  },
  {
    num: "02",
    title: "Transparent, Upfront Estimates",
    desc: "Before any tool touches a pipe, you receive an itemized estimate explaining the recommended fix, labor, and materials. We do not proceed without your express agreement.",
  },
  {
    num: "03",
    title: "Diagnostic-Led Problem Solving",
    desc: "Rather than applying temporary patches that fail weeks later, our technicians locate root causes using acoustic listening gear, drain cameras, and pressure gauges.",
  },
  {
    num: "04",
    title: "Respect for Your Home & Property",
    desc: "Clean drop cloths, protective boot covers, and rigorous cleanup are non-negotiable standards on every call. We leave your bathroom, kitchen, or basement spotless.",
  },
];

/**
 * WhyChooseUs
 * Editorial split layout highlighting ProFlow's operational approach
 * with credible, non-fabricated copy and an articulated visual placeholder.
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className={styles.section} aria-labelledby="why-heading">
      <div className="container">
        <div className={styles.layout}>
          {/* Left Column: Editorial & Value Pillars */}
          <div className={styles.editorialCol}>
            <div className={styles.kicker}>The ProFlow Standard</div>
            <h2 id="why-heading" className={styles.title}>
              Built on dependability, clear pricing, and careful craftsmanship.
            </h2>
            <p className={styles.intro}>
              Plumbing issues interrupt your home and daily routine. Our service standard is designed
              around reducing friction through punctual arrival, respectful workmanship, and honest recommendations.
            </p>

            <div className={styles.pillarsList}>
              {PILLARS.map((pillar) => (
                <div key={pillar.num} className={styles.pillarItem}>
                  <div className={styles.pillarNum} aria-hidden="true">
                    {pillar.num}
                  </div>
                  <div className={styles.pillarContent}>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Button href="#contact" variant="primary">
                Book a Service Call
              </Button>
              <Button href="tel:5550199" variant="secondary">
                Emergency Dispatch: (555) 0199
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Feature Showcase Placeholder */}
          <div className={styles.visualCol}>
            <div className={styles.visualFrame}>
              {/*
                IMAGE PLACEHOLDER DOCUMENTATION:
                Target image: /images/service-van-equipment.jpg
                Suggested search terms: "modern service van organized plumbing tools equipment diagnostic camera"
                Dimensions: 1000 x 1200 px (portrait/vertical ratio)
                Content: Well-organized technician equipment, diagnostic monitors, or clean service setup.
                Fallback: Handled by PlaceholderImage; when file is placed at public/images/service-van-equipment.jpg, it loads automatically.
              */}
              <div className={styles.imagePlaceholder} aria-label="ProFlow equipment and service van placeholder">
                <PlaceholderImage
                  src="/images/service-van-equipment.jpg"
                  alt="ProFlow diagnostic plumbing van equipped with CCTV pipe cameras and specialized clearing equipment"
                  width={1000}
                  height={1200}
                  filename="service-van-equipment.jpg"
                  hint="Diagnostic plumbing van equipped with CCTV pipe cameras and specialized clearing equipment."
                  variant="portrait"
                />

                <div className={styles.specCard}>
                  <div className={styles.specHeader}>
                    <span className={styles.specDot} aria-hidden="true" />
                    <span className={styles.specTag}>Operational Commitment</span>
                  </div>
                  <ul className={styles.specList}>
                    <li>✓ No dispatch before clear scope alignment</li>
                    <li>✓ Modern pipe-location &amp; camera diagnostics</li>
                    <li>✓ Complete post-repair cleanup guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
