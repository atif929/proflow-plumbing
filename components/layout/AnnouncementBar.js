import styles from "./AnnouncementBar.module.css";

/**
 * AnnouncementBar
 * Thin demo announcement strip rendered above the header.
 * Discloses that ProFlow Plumbing is a fictional plumbing demo project.
 */
export default function AnnouncementBar() {
  return (
    <aside className={styles.bar} aria-label="Demo notice">
      <div className={`container ${styles.inner}`}>
        <span className={styles.badge}>DEMO SITE</span>
        <p className={styles.text}>
          This is a demo created by Cimpletech. Images and services can be changed. For contact, call{" "}
          <a href="tel:+61283593100" className={styles.link}>+61 2 8359 3100</a> or{" "}
          <a href="https://wa.me/61283593100" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>.
        </p>
      </div>
    </aside>
  );
}
