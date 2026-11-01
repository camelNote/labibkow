import Image from "next/image";
import styles from "@/styles/reflow.module.css";

export default function ImgBox({ id, link, fig, text, width, height, alt }) {
  return (
    <figure className={styles.figure} id={id}>
      <Image
        src={link}
        width={width}
        height={height}
        alt={alt}
        sizes="(max-width: 900px) 92vw, 700px"
      />
      <figcaption className={styles.figCaption}>
        <b>{fig}</b> {text}
      </figcaption>
    </figure>
  );
}
