import Reveal from "@/components/shared/Reveal";
import { impactMetrics } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function ImpactStrip() {
  return (
    <section className="impact-strip section-frame" aria-labelledby="impact-title">
      <div className="impact-heading">
        <div>
          <p className="eyebrow">A closer look</p>
          <h2 id="impact-title">
            Systems to use.
            <br />
            Stories to watch.
          </h2>
        </div>
        <p className="impact-intro">
          Software, ad creative, and one real-world systems result—side by side.
        </p>
      </div>

      <div className="impact-grid">
        {impactMetrics.map((metric, index) => (
          <Reveal key={metric.id} delay={index * 65}>
            <article className={`impact-card impact-card--${metric.id}`}>
              <p className="impact-eyebrow">{metric.eyebrow}</p>
              <div className="impact-figure">
                <strong>{metric.value}</strong>
                <span>{metric.unit}</span>
              </div>
              <p className="impact-description">{metric.description}</p>
              <a className="impact-link" href={metric.href}>
                {metric.action}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
