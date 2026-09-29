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
            <p className="eyebrow">05 · Capabilities</p>
            <h2 id="capabilities-title">Three connected practices.</h2>
          </div>
          <p>
            Enough range to move from operational problem to working system—and
            from product idea to a clear commercial story.
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
