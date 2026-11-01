"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/chat.module.css";
import { defaultQuestion, dict, questions } from "@/lib/homeContent";
import { fallbackImage, homeImages } from "@/lib/homeImages";
import arrowLeft from "@/public/home/arrowLeft.svg";
import arrowRight from "@/public/home/arrowRight.svg";

// Remove Typed.js control sequences (^1500 pauses, `instant` markers) so the
// static fallback reads like the animated output.
function stripTypedControls(html) {
  return html.replace(/\^\d+/g, "").replace(/`/g, "");
}

export default function HomeChat() {
  const [question, setQuestion] = useState(defaultQuestion);
  const typedRef = useRef(null);
  const isFirstRender = useRef(true);
  const entry = dict[question];
  const activeIndex = questions.indexOf(question);

  // Typed.js animates by writing to the DOM, so it is kept out of React's
  // render path and loaded on demand (it is not needed for the initial paint).
  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;

    el.innerHTML = "";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Don't fight the browser's scroll restoration on first load.
    if (!isFirstRender.current) {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
    isFirstRender.current = false;

    if (prefersReducedMotion) {
      el.innerHTML = entry.theStrArr.map(stripTypedControls).join("<br /><br />");
      return;
    }

    let typed;
    let cancelled = false;

    import("typed.js").then(({ default: Typed }) => {
      if (cancelled || !typedRef.current) return;

      typed = new Typed(typedRef.current, {
        strings: entry.theStrArr,
        typeSpeed: 20,
        backSpeed: 20,
        loop: false,
        fadeOut: true,
        contentType: "html",
      });
    });

    return () => {
      cancelled = true;
      typed?.destroy();
    };
  }, [entry]);

  return (
    <>
      <div className={styles.flexDis}>
        <div className={styles.response}>
          <div ref={typedRef} className={styles.typed} />
          {/* Static copy so the answer is crawlable and readable without JS. */}
          <div className={styles.srOnly} aria-hidden="true">
            {entry.theStrArr.map((text) => (
              <p
                key={text}
                dangerouslySetInnerHTML={{ __html: stripTypedControls(text) }}
              />
            ))}
          </div>
        </div>

        <div className={styles.imgSlide}>
          {entry.imgArr.map(([src, caption], index) => (
            <figure key={src} className={styles.imgFigure}>
              <Image
                src={homeImages[src] ?? fallbackImage}
                alt={caption || "Photo of Labib Kowsar"}
                width={340}
                height={340}
                sizes="(max-width: 900px) 72vw, 340px"
                placeholder="blur"
                className={styles.displayImg}
                preload={question === defaultQuestion && index === 0}
              />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles.flexCon}>
        <button
          type="button"
          className={`${styles.btnArrow} ${styles.btnLeft} ${
            activeIndex <= 0 ? styles.hidden : ""
          }`}
          onClick={() => setQuestion(questions[activeIndex - 1])}
          aria-label="Previous question"
          disabled={activeIndex <= 0}
        >
          <Image src={arrowLeft} alt="" width={30} height={30} />
        </button>

        <div className={styles.slider}>
          {questions.map((key) => (
            <button
              key={key}
              type="button"
              className={key === question ? styles.btnActive : undefined}
              aria-pressed={key === question}
              onClick={() => setQuestion(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.btnArrow} ${styles.btnRight} ${
            activeIndex >= questions.length - 1 ? styles.hidden : ""
          }`}
          onClick={() => setQuestion(questions[activeIndex + 1])}
          aria-label="Next question"
          disabled={activeIndex >= questions.length - 1}
        >
          <Image src={arrowRight} alt="" width={30} height={30} />
        </button>
      </div>
    </>
  );
}
