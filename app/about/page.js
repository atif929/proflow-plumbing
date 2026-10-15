import Link from "next/link";
import styles from "./AboutPage.module.css";
import Button from "../../components/ui/Button";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { TEAM_MEMBERS } from "../../data/team";

export const metadata = {
  title: "About Us & Our Team | ProFlow Plumbing",
  description:
    "Learn about ProFlow Plumbing: our customer-first approach, operational principles, respectful job-site standards, and demonstration specialist team.",
};

const OPERATIONAL_VALUES = [
  {
    title: "Clear, Upfront Communication",
    desc: "Plumbing repairs shouldn't feel like guesswork. We explain diagnoses in clear language, provide itemized options before starting, and communicate arrival updates directly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Diagnostic-Led Problem Solving",
    desc: "Instead of applying temporary fixes that fail weeks later, our technicians locate underlying root causes using acoustic listening equipment, thermal imaging, and CCTV cameras.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Respect for Your Space & Home",
    desc: "We treat your home with care: wearing clean boot coverings indoors, laying heavy drop cloths in work zones, and thoroughly cleaning up debris before leaving.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Explaining Repair Options",
    desc: "Whenever possible, we outline repair versus replacement paths with honest trade advice, empowering homeowners to make informed decisions for their budget.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const SERVICE_EXPERIENCES = [
  {
    phase: "Prior to Arrival",
    detail:
      "Direct call confirmation with a realistic arrival window and clarification of immediate shutoff procedures if active water is flowing.",
  },
  {
    phase: "On-Site Evaluation",
    detail:
      "Systematic diagnostic assessment of the problem area followed by an itemized written scope and fixed quotation before any work commences.",
  },
  {
    phase: "During the Repair",
    detail:
      "Tidy, methodical execution using high-grade brass, copper, and polymer fittings, with protective barriers shielding adjacent fixtures.",
  },
  {
    phase: "Job Completion",
    detail:
      "Water pressure testing, joint inspection, a clear walkthrough of the repair, and a spotless workspace return.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main-content" className={styles.main}>
        {/* 1. Page Introduction / Hero */}
        <section className={styles.heroSection} aria-labelledby="about-page-title">
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
                  About
                </li>
              </ol>
            </nav>

            <div className={styles.heroContent}>
              <div className={styles.kicker}>The ProFlow Approach</div>
              <h1 id="about-page-title" className={styles.heroTitle}>
                Plumbing Centered on Care, Clarity, and Craftsmanship
              </h1>
              <p className={styles.heroLead}>
                We believe that plumbing services should be defined by calm communication, clean
                workmanship, and transparent scopes. Learn how our team approaches residential plumbing
                challenges every day.
              </p>

              <div className={styles.heroCtaGroup}>
                <Button href="/services" variant="primary">
                  Explore Plumbing Services
                </Button>
                <Button href="/#contact" variant="secondary">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Story (Fictional, engaging brand narrative without fake history) */}
        <section className={styles.storySection} aria-labelledby="story-heading">
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={styles.storyContent}>
                <div className={styles.kicker}>Why ProFlow Was Conceived</div>
                <h2 id="story-heading" className={styles.storyTitle}>
                  Bridging the gap between emergency trade skill and customer respect.
                </h2>
                <p className={styles.storyParagraph}>
                  Homeowners often call a plumber during high-stress moments—when water is flooding
                  a hallway, a water heater has failed on a winter morning, or a drain has blocked
                  just before dinner. In those moments, what people need most is not high-pressure sales
                  tactics, but steady reassurance and precise trade diagnostics.
                </p>
                <p className={styles.storyParagraph}>
                  ProFlow was built around a straightforward philosophy: show up on time, treat
                  the homeowner&apos;s property as if it were our own, diagnose the true root cause
                  rather than applying quick bandages, and clearly present options before touching a pipe.
                </p>
                <p className={styles.storyParagraph}>
                  Whether managing an urgent residential containment or helping a homeowner select
                  an energy-efficient continuous hot water system, our technicians bring pride,
                  clean habits, and open communication to every service call.
                </p>

                <div className={styles.storyPillGroup}>
                  <span className={styles.storyPill}>✓ Straightforward pricing</span>
                  <span className={styles.storyPill}>✓ Clean floor protection</span>
                  <span className={styles.storyPill}>✓ Diagnostic-first repairs</span>
                </div>
              </div>

              {/* Story Visual Placeholder */}
              <div className={styles.storyMediaCol}>
                <div className={styles.storyFrame}>
                  {/*
                    IMAGE PLACEHOLDER DOCUMENTATION:
                    Target file: /public/images/about-workshop.jpg
                    Suggested search terms: "modern clean plumbing workshop organized tools copper pipes technician worktable"
                    Dimensions: 1000 x 900px (4:3 ratio)
                    Content: Clean, organized plumbing workshop or technician workbench setup.
                  */}
                  <PlaceholderImage
                    src="/images/about-workshop.jpg"
                    alt="ProFlow well-maintained workshop and precision pipe diagnostic tools"
                    width={1000}
                    height={900}
                    filename="about-workshop.jpg"
                    hint="Well-maintained workshop and precision pipe diagnostic tools."
                    variant="landscape"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Approach & Practical Values */}
        <section className={styles.valuesSection} aria-labelledby="values-heading">
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.kicker}>Guiding Principles</div>
              <h2 id="values-heading" className={styles.sectionTitle}>
                Our Everyday Operational Principles
              </h2>
              <p className={styles.sectionLead}>
                These four commitments guide every technician who steps onto a customer&apos;s property.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {OPERATIONAL_VALUES.map((val, idx) => (
                <div key={idx} className={styles.valueCard}>
                  <div className={styles.valueIconWrap}>{val.icon}</div>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Meet the Team (5 Fictional Specialist Profiles) */}
        <section id="team" className={styles.teamSection} aria-labelledby="team-page-heading">
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.kicker}>Field Specialists</div>
              <h2 id="team-page-heading" className={styles.sectionTitle}>
                Meet the Demonstration Team
              </h2>
              <p className={styles.sectionLead}>
                Our fictional demonstration roster showcases specialized plumbing roles from emergency
                containment to precision diagnostic camera surveys.
              </p>
            </div>

            <div className={styles.teamGrid}>
              {TEAM_MEMBERS.map((member) => (
                <article key={member.id} className={styles.teamCard}>
                  <div className={styles.teamMedia}>
                    {/*
                      IMAGE PLACEHOLDER DOCUMENTATION:
                      Target file: /public/images/${member.imagePath}
                      Suggested search terms: "${member.suggestedImage}"
                      Dimensions: ${member.dimensions}
                      Content: Professional technician portrait in clean company attire.
                    */}
                    <PlaceholderImage
                      src={`/images/${member.imagePath}`}
                      alt={`Demonstration portrait of ${member.name}, ${member.role}`}
                      width={600}
                      height={700}
                      filename={member.imagePath}
                      hint={`${member.name} (${member.role})`}
                      variant="portrait"
                    />
                  </div>

                  <div className={styles.teamBody}>
                    <span className={styles.teamBadge}>{member.badge}</span>
                    <h3 className={styles.teamName}>{member.name}</h3>
                    <p className={styles.teamRole}>{member.role}</p>
                    <p className={styles.teamBio}>{member.bio}</p>

                    <div className={styles.specialtiesBox}>
                      <span className={styles.specialtiesLabel}>Focus Areas:</span>
                      <ul className={styles.specialtiesList}>
                        {member.specialties.map((spec, sIdx) => (
                          <li key={sIdx} className={styles.specialtyTag}>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What Customers Can Expect (Service Experience Timeline) */}
        <section className={styles.expectSection} aria-labelledby="expect-heading">
          <div className="container">
            <div className={styles.expectBox}>
              <div className={styles.expectHeader}>
                <div className={styles.kicker}>The Customer Journey</div>
                <h2 id="expect-heading" className={styles.expectTitle}>
                  What Customers Can Expect On Every Call
                </h2>
                <p className={styles.expectLead}>
                  A predictable, respectful service standard built to reduce anxiety and resolve
                  plumbing failures thoroughly.
                </p>
              </div>

              <div className={styles.expectGrid}>
                {SERVICE_EXPERIENCES.map((exp, i) => (
                  <div key={i} className={styles.expectCard}>
                    <div className={styles.expectStepRow}>
                      <span className={styles.expectNumber}>0{i + 1}</span>
                      <h3 className={styles.expectPhase}>{exp.phase}</h3>
                    </div>
                    <p className={styles.expectDetail}>{exp.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact CTA (Linking to /#contact) */}
        <section className={styles.ctaSection} aria-labelledby="about-cta-title">
          <div className="container">
            <div className={styles.ctaBanner}>
              <div className={styles.ctaContent}>
                <span className={styles.ctaKicker}>Ready to Get Started?</span>
                <h2 id="about-cta-title" className={styles.ctaTitle}>
                  Have a question or need a quote?
                </h2>
                <p className={styles.ctaText}>
                  Whether you are planning a bathroom upgrade or need immediate assistance with an urgent leak,
                  our team is ready to help with transparent, upfront advice.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Button href="/#contact" variant="primary" className={styles.ctaPrimaryBtn}>
                  Schedule Service Consultation
                </Button>
                <Button href="tel:5550199" variant="secondary" className={styles.ctaPhoneBtn}>
                  Emergency Line: (555) 0199
                </Button>
              </div>
            </div>

            <div className={styles.returnRow}>
              <Link href="/" className={styles.returnLink}>
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
