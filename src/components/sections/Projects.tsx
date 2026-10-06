"use client";

import Image from "next/image";
import { BookOpen, Github, Globe2, LockKeyhole } from "lucide-react";
import { useMemo, useState } from "react";
import AccessibleDialog from "@/components/shared/AccessibleDialog";
import MediaPlayer from "@/components/shared/MediaPlayer";
import Reveal from "@/components/shared/Reveal";
import {
  featuredProjectIds,
  orderedProjects,
  projectFilters,
  projectPosters,
  type ProjectFilter,
} from "@/data/portfolio";
import type { ProjectItem } from "@/data/projects";

const featuredSet = new Set<string>(featuredProjectIds);

function matchesFilter(project: ProjectItem, filter: ProjectFilter) {
  if (filter === "all") return true;
  if (filter === "selected") return featuredSet.has(project.id);
  if (filter === "automation") return project.category === "featured";
  return project.category === filter;
}

function ProjectVisual({ project }: { project: ProjectItem }) {
  const poster = projectPosters[project.id];

  if (project.video && poster) {
    return (
      <MediaPlayer
        src={project.video}
        poster={poster}
        title={project.title}
      />
    );
  }

  if (project.image) {
    return (
      <div className="project-image">
        <Image
          src={project.image}
          alt={`Preview of ${project.title}`}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className="project-fallback" aria-hidden="true">
      <span>{project.categoryLabel}</span>
      <strong>KG / {project.id.slice(0, 2).toUpperCase()}</strong>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onCaseStudy,
}: {
  project: ProjectItem;
  index: number;
  onCaseStudy: (project: ProjectItem) => void;
}) {
  const isLead = project.id === "ghl-crm-automation";

  return (
    <article className={`project-card${isLead ? " project-card--lead" : ""}`}>
      <ProjectVisual project={project} />
      <div className="project-body">
        <div className="project-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.categoryLabel}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <div className="tag-list" aria-label="Technology used">
          {project.techStack.slice(0, isLead ? 5 : 4).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-actions">
          {project.hasCaseStudy && project.caseStudy ? (
            <button
              className="text-button"
              type="button"
              onClick={() => onCaseStudy(project)}
            >
              <BookOpen aria-hidden="true" size={17} />
              Read case study
            </button>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={17} />
              Source
            </a>
          ) : null}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Globe2 aria-hidden="true" size={17} />
              Live project
            </a>
          ) : null}
          {project.externalUrl ? (
            <a href={project.externalUrl} target="_blank" rel="noreferrer">
              <Globe2 aria-hidden="true" size={17} />
              View app
            </a>
          ) : null}
          {project.isEnterpriseProprietary ? (
            <span className="proprietary-label">
              <LockKeyhole aria-hidden="true" size={15} />
              Proprietary system
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function CaseStudy({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  const study = project?.caseStudy;

  return (
    <AccessibleDialog
      open={Boolean(project && study)}
      title={study?.title ?? "Project case study"}
      eyebrow="Case study · Automation architecture"
      onClose={onClose}
      wide
    >
      {study ? (
        <div className="case-study">
          <div className="case-intro-grid">
            <div>
              <span>Role</span>
              <strong>{study.role}</strong>
            </div>
            <div>
              <span>Context</span>
              <strong>{study.clientContext}</strong>
            </div>
          </div>

          <p className="case-summary">{study.summary}</p>

          <div className="case-results" aria-label="Case study results">
            {study.results.map((result) => (
              <div key={result.label}>
                <strong>{result.metric}</strong>
                <span>{result.label}</span>
                <p>{result.desc}</p>
              </div>
            ))}
          </div>

          <section className="case-section">
            <p className="eyebrow">01 · The system problem</p>
            <div className="case-card-grid">
              {study.problem.map((problem) => (
                <article key={problem.title}>
                  <h3>{problem.title}</h3>
                  <p>{problem.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section">
            <p className="eyebrow">02 · Master schema</p>
            <div className="schema-grid">
              {study.schemaFolders.map((folder) => (
                <article key={folder.name}>
                  <div>
                    <h3>{folder.name}</h3>
                    <span>{folder.count}</span>
                  </div>
                  <ul>
                    {folder.fields.map((field) => (
                      <li key={field}>{field}</li>
                    ))}
                  </ul>
                  {folder.note ? <p>{folder.note}</p> : null}
                </article>
              ))}
            </div>
          </section>

          <section className="case-section case-two-column">
            <div>
              <p className="eyebrow">03 · Deduplication</p>
              <ul className="numbered-list">
                {study.deduplication.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">04 · Migration</p>
              <ul className="numbered-list">
                {study.migration.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="case-section">
            <p className="eyebrow">05 · Decoupled automation engine</p>
            <div className="automation-list">
              {study.automations.map((automation) => (
                <article key={automation.id}>
                  <span>{automation.id}</span>
                  <div>
                    <h3>{automation.name}</h3>
                    <p>
                      <strong>Trigger:</strong> {automation.trigger}
                    </p>
                    <p>{automation.logic}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section">
            <p className="eyebrow">Technology & methods</p>
            <div className="tag-list">
              {study.techStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </AccessibleDialog>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("selected");
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  const visibleProjects = useMemo(
    () => orderedProjects.filter((project) => matchesFilter(project, filter)),
    [filter],
  );

  return (
    <section id="work" className="section-frame content-section" aria-labelledby="work-title">
      <Reveal>
        <header className="section-heading split-heading">
          <div>
            <p className="eyebrow">04 · Development & automation</p>
            <h2 id="work-title">A technical foundation.</h2>
          </div>
          <p>
            Alongside ad creative, I build web products and business automations.
            Explore the software projects behind my technical background.
          </p>
        </header>
      </Reveal>

      <div className="filter-bar" role="group" aria-label="Filter projects">
        {projectFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
        <span className="filter-count" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 4) * 45}>
            <ProjectCard
              project={project}
              index={orderedProjects.indexOf(project)}
              onCaseStudy={setActiveCaseStudy}
            />
          </Reveal>
        ))}
      </div>

      <CaseStudy
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
}
