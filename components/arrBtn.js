import Link from "next/link";
import styles from "@/styles/arrBtn.module.css";

function isExternal(link) {
  return /^https?:\/\//i.test(link);
}

export default function ArrBtn({ content, color, hoverColor, btnLink, newWin }) {
  const buttonStyle = {
    "--button-color": color,
    "--button-hover-color": hoverColor,
  };

  if (newWin || isExternal(btnLink)) {
    return (
      <a
        className={styles.button}
        style={buttonStyle}
        href={btnLink}
        target={newWin ? "_blank" : undefined}
        rel={newWin ? "noopener noreferrer" : undefined}
      >
        <span>{content}</span>
      </a>
    );
  }

  if (btnLink.startsWith("#")) {
    return (
      <a className={styles.button} style={buttonStyle} href={btnLink}>
        <span>{content}</span>
      </a>
    );
  }

  return (
    <Link className={styles.button} style={buttonStyle} href={btnLink}>
      <span>{content}</span>
    </Link>
  );
}
