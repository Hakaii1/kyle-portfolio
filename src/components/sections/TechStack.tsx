import Reveal from "@/components/shared/Reveal";
import { capabilities } from "@/data/portfolio";

export default function TechStack() {
  return (
    <section
      id="capabilities"
      className="section-frame content-section"
      aria-labelledby="capabilities-title"
    >
      <Reveal>
        <header className="section-heading split-heading">
          <div>
            <p className="eyebrow">03 · Ad creative services</p>
            <h2 id="capabilities-title">From brief to final edit.</h2>
          </div>
          <p>
            Share your product, approved script, and visual references. I handle
            the creative production, with the scope and delivery date agreed
            before we start.
          </p>
        </header>
      </Reveal>

      <div className="capability-list">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 70}>
            <article className="capability-row">
              <span className="capability-number">{capability.number}</span>
              <div>
                <h3>{capability.title}</h3>
                <p>{capability.summary}</p>
              </div>
              <ul>
                {capability.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
