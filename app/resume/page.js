import StnBtn from "@/components/stnBtn";
import styles from "@/styles/resume.module.css";

export const metadata = {
  title: "Resume",
  description:
    "Resumes for Labib Kowsar, focused on general engineering, hardware, software, and non-technical roles.",
};

const resumes = [
  { text: "General Engineering", link: "/" },
  { text: "Hardware Focus", link: "/" },
  { text: "Software Focus", link: "/" },
  { text: "Non-technical", link: "/" },
];

export default function ResumePage() {
  return (
    <>
      <div className={styles.headerCon}>
        <h1>My resumes:</h1>
        <h3>
          Below are resumes for different focus types. The one displayed in the
          iframe is a hybrid of all three, and my general engineering resume that
          I use most commonly.
        </h3>
      </div>

      <div className={styles.flexCon}>
        {resumes.map((resume) => (
          <StnBtn key={resume.text} text={resume.text} link={resume.link} />
        ))}
      </div>

      <div className={styles.barCon}>
        <div className={styles.bar} />
      </div>

      <div className={styles.iframeCon}>
        <iframe
          src="/resume/IntakeResume.pdf"
          title="Labib Kowsar's general engineering resume"
          loading="lazy"
        />
      </div>
    </>
  );
}
