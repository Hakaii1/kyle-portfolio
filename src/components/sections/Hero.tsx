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
            <p className="hero-kicker">AI Ads Specialist</p>
            <h1 id="hero-title">
              AI video ads.
              <br />
              <em>Made for your brand.</em>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-intro">
              I’m Kyle Gulapa, an AI Ads Specialist creating UGC-style product
              videos and stylized 3D ads. I turn your brief and script into
              visuals, editing, captions, and sound.
            </p>
            <div className="hero-actions">
              <a className="button" href="#films">
                Watch my ad work
              </a>
              <a className="text-link" href="#contact">
                Discuss an ad project
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
              <span>AI Ads Specialist</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

    </section>
  );
}
