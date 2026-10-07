"use client";

import { useMemo, useState } from "react";
import MediaPlayer from "@/components/shared/MediaPlayer";
import Reveal from "@/components/shared/Reveal";
import { orderedVideoAds, videoAdsData, videoPosters } from "@/data/portfolio";

type FilmFilter = "all" | "ugc" | "pixar" | "vsl";

const filmFilters: ReadonlyArray<{ id: FilmFilter; label: string }> = [
  { id: "all", label: "All formats" },
  { id: "ugc", label: "UGC-style ads" },
  { id: "vsl", label: "VSL ads" },
  { id: "pixar", label: "3D animation" },
];

const previewCount = 3;

export default function AiVideoAds() {
  const [filter, setFilter] = useState<FilmFilter>("all");
  const [expanded, setExpanded] = useState(false);
  const ugcCount = videoAdsData.filter((video) => video.category === "ugc").length;
  const pixarCount = videoAdsData.filter((video) => video.category === "pixar").length;
  const vslCount = videoAdsData.filter((video) => video.category === "vsl").length;
  const filteredAds = useMemo(
    () =>
      filter === "all"
        ? orderedVideoAds
        : orderedVideoAds.filter((video) => video.category === filter),
    [filter],
  );
  const visibleAds = expanded ? filteredAds : filteredAds.slice(0, previewCount);

  function selectFilter(nextFilter: FilmFilter) {
    setFilter(nextFilter);
    setExpanded(false);
  }

  return (
    <section id="films" className="section-frame content-section film-section" aria-labelledby="films-title">
      <Reveal>
        <header className="section-heading split-heading">
          <div>
            <p className="eyebrow">02 · AI Ad Portfolio</p>
            <h2 id="films-title">Selected ad work.</h2>
          </div>
          <p>
            Explore {ugcCount} UGC-style ads, {vslCount} VSL {vslCount === 1 ? "ad" : "ads"},
            and {pixarCount} stylized 3D ads, from product stories to character animation.
            The three latest projects are shown first.
          </p>
        </header>
      </Reveal>

      <div className="filter-bar film-filter" role="group" aria-label="Filter AI Ads">
        {filmFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => selectFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
        <span className="filter-count" role="status" aria-live="polite" aria-atomic="true">
          Showing {visibleAds.length} of {filteredAds.length} ads
        </span>
      </div>

      <div id="film-collection" className={`film-grid film-grid--${filter}`}>
        {visibleAds.map((film, index) => (
          <Reveal
            key={film.id}
            delay={(index % 4) * 50}
            className={film.aspect === "16:9 Landscape HD" ? "film-ad--landscape" : ""}
          >
            <article
              className={`film-card${film.aspect === "16:9 Landscape HD" ? " film-card--landscape" : ""}`}
            >
              <MediaPlayer
                src={film.videoUrl}
                poster={videoPosters[film.id]}
                title={film.title}
                mediaLabel="ad"
                portrait={film.aspect === "9:16 Vertical HD"}
              />
              <div className="film-card-copy">
                <div className="film-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{film.categoryLabel}</span>
                </div>
                <h3>{film.title}</h3>
                <p className="film-brand">{film.brand}</p>
                <p>{film.description}</p>
                {film.role && (
                  <dl>
                    <div>
                      <dt>My contribution</dt>
                      <dd>{film.role}</dd>
                    </div>
                  </dl>
                )}
                <div className="tag-list">
                  {film.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="film-section-actions">
        {filteredAds.length > previewCount && (
          <button
            type="button"
            className="button button--secondary"
            aria-controls="film-collection"
            aria-expanded={expanded}
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? "Show fewer ads" : `View all ${filteredAds.length} ads`}
          </button>
        )}
        <p className="film-enquiry">
          Have a product and a brief?
          <a href="#contact">Let’s talk about your next ad <span aria-hidden="true">↗</span></a>
        </p>
      </div>
    </section>
  );
}
