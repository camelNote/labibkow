"use client";

import Image from "next/image";
import ArrBtn from "./arrBtn";
import styles from "@/styles/defCard.module.css";
import { detailImages } from "@/lib/projectImages";
import cancelIcon from "@/public/project/cancel.svg";

export default function DetailCard({ project, onClose }) {
  const image = detailImages[project.slug];

  return (
    <div
      className={styles.card}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.innerGrid}>
        <div className={styles.sideImg}>
          <Image
            src={image}
            alt=""
            width={image.width}
            height={image.height}
            className={styles.image}
          />
        </div>

        <div className={styles.leftBox}>
          <div className={styles.topCard}>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <button
              type="button"
              className={styles.imgCon}
              onClick={onClose}
              aria-label="Close project details"
              autoFocus
            >
              <Image src={cancelIcon} alt="" width={30} height={30} />
            </button>
          </div>

          <div className={styles.content}>
            <h2 id="project-dialog-title">{project.title}</h2>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: project.text }}
            />
          </div>

          <div className={styles.btnCont}>
            <ArrBtn
              content="More details"
              color={project.theme}
              hoverColor={project.hover}
              btnLink={project.btnLink}
              newWin={project.theWin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
