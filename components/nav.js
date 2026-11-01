"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  // Kept hidden until the resume page is ready to be linked publicly.
  { href: "/resume", label: "Resume", hidden: true },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navHead">
        <Link href="/" className="logo">
          labibkow<span className="green">.</span>
        </Link>

        <button
          type="button"
          className="hamburger"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={isMenuOpen ? undefined : "hideNav"}
        >
          <ul>
            {links.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <li key={link.href} hidden={link.hidden}>
                  <Link
                    href={link.href}
                    className={active ? "active" : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {/* Aligns page content with the fixed navbar. */}
      <div id="blockAlign" />
    </>
  );
}
