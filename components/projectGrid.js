"use client";

import { useEffect, useRef, useState } from "react";
import Card from "@/components/card";
import DetailCard from "@/components/detailCard";
import styles from "@/styles/project.module.css";
import { projectsBySlug, sections } from "@/lib/projects";

export default function ProjectGrid() {
  const [activeSlug, setActiveSlug] = useState(null);
  const triggerRef = useRef(null);
  const activeProject = activeSlug ? projectsBySlug[activeSlug] : null;

  function openProject(slug, event) {
    triggerRef.current = event.currentTarget;
    setActiveSlug(slug);
  }

  function closeProject() {
    setActiveSlug(null);
    // Return focus to the card that opened the dialog.
    triggerRef.current?.focus();
  }

  // Close on Escape and lock background scrolling while the dialog is open.
  useEffect(() => {
    if (!activeSlug) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveSlug(null);
        triggerRef.current?.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeSlug]);

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section key={section.heading}>
          <ProjHead title={section.heading} />
          <div className={styles.flexBox}>
            {section.slugs.map((slug, index) => (
              <Card
                key={slug}
                slug={slug}
                onOpen={openProject}
                preload={sectionIndex === 0 && index === 0}
              />
            ))}
          </div>
        </section>
      ))}

      {activeProject ? (
        <div className={styles.transparent} onClick={closeProject}>
          <div className={styles.theCont}>
            <DetailCard project={activeProject} onClose={closeProject} />
          </div>
        </div>
      ) : null}
    </>
  );
}

function ProjHead({ title }) {
  return (
    <div className={styles.headerContent}>
      {title}
      <div className={styles.blueLine} />
    </div>
  );
}
