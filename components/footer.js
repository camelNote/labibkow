import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import githubIcon from "@/public/footer/githubBlack.svg";
import linkedinIcon from "@/public/footer/linkedin.svg";
import mailIcon from "@/public/footer/mail.svg";

const imageDim = 34;

const externalLinks = [
  {
    href: "https://github.com/camelNotationsdjkh",
    label: "GitHub",
    icon: githubIcon,
  },
  {
    href: "https://www.linkedin.com/in/labibkowsar/",
    label: "LinkedIn",
    icon: linkedinIcon,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerCon}>
      <div className={styles.flex}>
        {externalLinks.map(({ href, label, icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
          >
            <Image src={icon} alt="" width={imageDim} height={imageDim} />
          </a>
        ))}

        <Link href="/contact" aria-label="Contact me by email">
          <Image src={mailIcon} alt="" width={imageDim} height={imageDim} />
        </Link>
      </div>

      <div className={styles.flex}>
        <div>&copy; Labib Kowsar {currentYear} &trade;</div>
      </div>
    </footer>
  );
}
