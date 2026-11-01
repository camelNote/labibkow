import Link from "next/link";
import styles from "@/styles/stnBtn.module.css";

export default function StnBtn({ text, link, newWin }) {
  // `newWin` is also used for static files (schematics) that are not routes.
  if (newWin) {
    return (
      <a
        className={styles.button}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  if (/^https?:\/\//i.test(link)) {
    return (
      <a className={styles.button} href={link}>
        {text}
      </a>
    );
  }

  if (link.startsWith("#")) {
    return (
      <a className={styles.button} href={link}>
        {text}
      </a>
    );
  }

  return (
    <Link className={styles.button} href={link}>
      {text}
    </Link>
  );
}
