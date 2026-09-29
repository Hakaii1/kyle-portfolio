"use client";

import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("work");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0.01, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Kyle Gulapa, home">
          <span>{siteConfig.initials}</span>
          <i aria-hidden="true" />
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : undefined}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="resume-link"
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FileText aria-hidden="true" size={16} />
            Resume
          </a>
          <a className="button button--small" href="#contact">
            Contact
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{menuOpen ? "Close" : "Open"} menu</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
      >
        {navigation.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activeSection === item.id ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          <span>05</span>
          Contact
        </a>
      </div>
    </header>
  );
}
