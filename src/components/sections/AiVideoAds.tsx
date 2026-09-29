"use client";

import { useMemo, useState } from "react";
import MediaPlayer from "@/components/shared/MediaPlayer";
import Reveal from "@/components/shared/Reveal";
import { orderedVideoAds, videoAdsData, videoPosters } from "@/data/portfolio";

type FilmFilter = "all" | "ugc" | "pixar";

const filmFilters: ReadonlyArray<{ id: FilmFilter; label: string }> = [
  { id: "all", label: "All formats" },
  { id: "ugc", label: "UGC ads" },
  { id: "pixar", label: "3D animation" },
];

export default function AiVideoAds() {
  const [filter, setFilter] = useState<FilmFilter>("all");
  const ugcCount = videoAdsData.filter((video) => video.category === "ugc").length;
  const pixarCount = videoAdsData.filter((video) => video.category === "pixar").length;
  const visibleAds = useMemo(
    () =>
      filter === "all"
        ? orderedVideoAds
        : orderedVideoAds.filter((video) => video.category === filter),
    [filter],
  );

  return (
    <section id="films" className="section-frame content-section film-section" aria-labelledby="films-title">
      <Reveal>
        <header className="section-heading split-heading">
          <div>
            <p className="eyebrow">03 · AI Ads Studio</p>
            <h2 id="films-title">Made to earn the next second.</h2>
          </div>
          <p>
            {ugcCount} UGC ads and {pixarCount} Pixar-style ads, spanning creator-led
            stories and stylized 3D animation. Every ad loads only when you choose
            to play it.
          </p>
        </header>
      </Reveal>

      <div className="filter-bar film-filter" role="group" aria-label="Filter AI Ads">
        {filmFilters.map((item) => (
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
          {visibleAds.length} ads
        </span>
      </div>

      <div className={`film-grid film-grid--${filter}`}>
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
                <dl>
                  <div>
                    <dt>Hook</dt>
                    <dd>{film.marketingHook}</dd>
                  </div>
                  <div>
                    <dt>Pipeline</dt>
                    <dd>{film.creativePipeline}</dd>
                  </div>
                </dl>
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
    </section>
  );
}
