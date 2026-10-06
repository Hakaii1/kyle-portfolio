import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import { experiencesData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-frame content-section"
      aria-labelledby="experience-title"
    >
      <Reveal>
        <header className="section-heading split-heading">
          <div>
            <p className="eyebrow">05 · Experience & education</p>
            <h2 id="experience-title">The background behind the work.</h2>
          </div>
          <p>
            My computer science education and development experience bring a
            structured approach to planning, production, and delivery.
          </p>
        </header>
      </Reveal>

      <div className="timeline">
        {experiencesData.map((item, index) => (
          <Reveal key={item.id} delay={index * 80}>
            <article className="timeline-item">
              <div className="timeline-rail" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
              </div>
              <div className="timeline-logo">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt=""
                    fill
                    sizes="72px"
                  />
                ) : null}
              </div>
              <div className="timeline-copy">
                <div className="timeline-heading">
                  <div>
                    <span>{item.type === "work" ? "Experience" : "Education"}</span>
                    <h3>{item.role}</h3>
                    <p>{item.organization}</p>
                  </div>
                  <div className="timeline-period">
                    <strong>{item.period}</strong>
                    <span>{item.location}</span>
                  </div>
                </div>
                <p className="timeline-description">{item.description}</p>
                <ul>
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
