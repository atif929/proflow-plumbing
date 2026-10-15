import Link from "next/link";
import PlaceholderImage from "../ui/PlaceholderImage";
import styles from "./TeamPreview.module.css";
import { TEAM_MEMBERS } from "../../data/team";

/**
 * TeamPreview
 * Honest demo preview of ProFlow's field technicians with placeholder imagery and profiles.
 */
export default function TeamPreview() {
  const previewMembers = TEAM_MEMBERS.slice(0, 3);

  return (
    <section id="about" className={styles.section} aria-labelledby="team-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.kicker}>The Field Specialists</div>
          <h2 id="team-heading" className={styles.title}>
            Meet the Demonstration Team
          </h2>
          <p className={styles.lead}>
            In a live production setting, this section introduces licensed staff and supervisors.
            Below are demonstration placeholder profiles highlighting operational roles.
          </p>
        </div>

        <div className={styles.grid}>
          {previewMembers.map((member) => (
            <article key={member.id} className={styles.card}>
              <div className={styles.mediaContainer}>
                {/*
                  IMAGE PLACEHOLDER DOCUMENTATION:
                  Target file: /public/images/${member.imagePath}
                  Suggested search terms: "${member.suggestedImage}"
                  Dimensions: ${member.dimensions}
                  Content: Technician headshot wearing navy/teal company uniform.
                */}
                <PlaceholderImage
                  src={`/images/${member.imagePath}`}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  width={600}
                  height={700}
                  filename={member.imagePath}
                  hint={`${member.name} (${member.role})`}
                  variant="portrait"
                />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.roleTag}>{member.role}</span>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footerNote}>
          <p>
            Curious about our operational philosophy and safety standards? Read more on our dedicated{" "}
            <Link href="/about" className={styles.aboutLink}>
              About ProFlow page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
