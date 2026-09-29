import Image from "next/image";
import { MapPin } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { siteConfig } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero section-frame" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="availability-line">
              <span className="status-dot" aria-hidden="true" />
              {siteConfig.availability}
              <span aria-hidden="true">·</span>
              <span className="hero-location">
                <MapPin aria-hidden="true" size={14} />
                {siteConfig.location} ({siteConfig.timezone})
              </span>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <p className="hero-kicker">Full-stack developer · AI ads specialist</p>
            <h1 id="hero-title">
              Engineering systems.
              <br />
              <em>Directing attention.</em>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-intro">
              I’m Kyle Gulapa. I build dependable web products and produce
              polished AI-led ads, bringing the same systems thinking to every
              commercial project.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                Explore selected work
              </a>
              <a className="text-link" href="#films">
                Watch AI Ads
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-portrait-wrap" delay={120}>
          <figure className="hero-portrait">
            <Image
              src="/assets/hero-portrait-cutout.png"
              alt="Kyle Gulapa wearing a dark suit and tie"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 760px) 96vw, 42vw"
            />
            <figcaption>
              <span>Kyle Eurie Gulapa</span>
              <span>Developer & Ads Specialist</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

    </section>
  );
}
