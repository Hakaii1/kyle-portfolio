"use client";

import { Check, Copy, Download, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import AccessibleDialog from "@/components/shared/AccessibleDialog";
import Reveal from "@/components/shared/Reveal";
import { siteConfig } from "@/data/portfolio";

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

export default function Footer() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  const handleCopy = async () => {
    try {
      await copyText(siteConfig.email);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2200);
    } catch {
      setCopyState("error");
    }
  };

  return (
    <footer id="contact" className="contact section-frame" aria-labelledby="contact-title">
      <Reveal>
        <div className="contact-grid">
          <div>
            <p className="eyebrow">06 · Contact</p>
            <h2 id="contact-title">
              Have a system to improve
              <br />
              <em>or a story to sharpen?</em>
            </h2>
          </div>
          <div className="contact-panel">
            <div className="contact-availability">
              <span className="status-dot" aria-hidden="true" />
              <div>
                <strong>{siteConfig.availability}</strong>
                <span>Full-time · Contract · Remote</span>
              </div>
            </div>

            <a className="email-link" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" size={19} />
              {siteConfig.email}
            </a>
            <button className="copy-button" type="button" onClick={handleCopy}>
              {copyState === "copied" ? (
                <Check aria-hidden="true" size={17} />
              ) : (
                <Copy aria-hidden="true" size={17} />
              )}
              {copyState === "copied" ? "Copied" : "Copy email"}
            </button>
            <span className="sr-only" aria-live="polite">
              {copyState === "copied"
                ? "Email address copied to clipboard"
                : copyState === "error"
                  ? "Could not copy email address"
                  : ""}
            </span>

            <div className="contact-links">
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" size={18} />
                GitHub
              </a>
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin aria-hidden="true" size={18} />
                LinkedIn
              </a>
              <button type="button" onClick={() => setResumeOpen(true)}>
                <FileText aria-hidden="true" size={18} />
                Preview resume
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="footer-line">
        <span>© {new Date().getFullYear()} Kyle Eurie Alvaro Gulapa</span>
        <span>{siteConfig.location}</span>
        <a href="#top">Back to top</a>
      </div>

      <AccessibleDialog
        open={resumeOpen}
        title="Kyle Gulapa — Resume"
        eyebrow="Resume preview"
        onClose={() => setResumeOpen(false)}
        wide
      >
        <div className="resume-toolbar">
          <p>
            If the embedded preview is unavailable on your device, open or download
            the original PDF directly.
          </p>
          <div>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
              <FileText aria-hidden="true" size={17} />
              Open PDF
            </a>
            <a href={siteConfig.resumeUrl} download="KyleGulapa_Resume.pdf">
              <Download aria-hidden="true" size={17} />
              Download
            </a>
          </div>
        </div>
        <iframe
          className="resume-frame"
          src={`${siteConfig.resumeUrl}#toolbar=1&navpanes=0`}
          title="Kyle Gulapa resume PDF"
        />
      </AccessibleDialog>
    </footer>
  );
}
