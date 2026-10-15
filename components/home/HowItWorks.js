import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    step: "01",
    title: "Initial Contact & Triage",
    desc: "Reach out via our booking form or emergency line. We establish the severity of the issue and confirm prompt scheduling.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "On-Site Evaluation & Quote",
    desc: "Our technician arrives equipped to inspect the root cause, providing a transparent, itemized written estimate prior to starting.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Clean, Expert Execution",
    desc: "We perform repairs and installations using durable materials and proven plumbing methods, keeping all work areas tidy.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Testing & Final Walkthrough",
    desc: "We run thorough pressure and flow checks, show you the completed work, and ensure your home is returned clean and operational.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

/**
 * HowItWorks
 * Sequential step-by-step process section showing clarity and professionalism.
 */
export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.kicker}>Simple, Dependable Process</div>
          <h2 id="process-heading" className={styles.title}>
            What to expect when you contact ProFlow
          </h2>
          <p className={styles.lead}>
            No surprises, confusing jargon, or unexpected fees. We keep every stage of our plumbing service transparent and stress-free.
          </p>
        </div>

        <div className={styles.stepGrid}>
          {STEPS.map((item, idx) => (
            <div key={item.step} className={styles.stepCard}>
              <div className={styles.topRow}>
                <span className={styles.stepNumber} aria-label={`Step ${item.step}`}>
                  {item.step}
                </span>
                <div className={styles.stepIcon}>{item.icon}</div>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
