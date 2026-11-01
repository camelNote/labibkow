import Image from "next/image";
import styles from "@/styles/card.module.css";
import { cardImages } from "@/lib/projectImages";
import { cardMeta } from "@/lib/projects";

export default function Card({ slug, onOpen, preload = false }) {
  const meta = cardMeta[slug];
  const image = cardImages[slug];

  return (
    <button
      type="button"
      className={styles.gridCard}
      onClick={(event) => onOpen(slug, event)}
      aria-haspopup="dialog"
    >
      <span className={styles.top}>
        <Image
          src={image}
          alt=""
          width={image.width}
          height={image.height}
          className={styles.image}
          preload={preload}
        />
      </span>
      <span className={styles.bottom} style={{ background: meta.color }}>
        {meta.label}
      </span>
    </button>
  );
}
