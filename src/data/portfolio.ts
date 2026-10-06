import { experiencesData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { videoAdsData } from "@/data/videoAds";

export const siteConfig = {
  name: "Kyle Gulapa",
  initials: "KG",
  email: "kylegulapa06@gmail.com",
  location: "Pampanga, Philippines",
  timezone: "UTC+8",
  availability: "Available for ad projects",
  resumeUrl: "/assets/Resume/KyleGulapa_Resume.pdf",
  githubUrl: "https://github.com/Hakaii1",
  linkedinUrl: "https://www.linkedin.com/in/kyle-eurie-gulapa/",
} as const;

export const navigation = [
  { id: "films", label: "AI Ads" },
  { id: "capabilities", label: "Services" },
  { id: "work", label: "Development" },
  { id: "experience", label: "Experience" },
] as const;

export type ProjectFilter =
  | "selected"
  | "all"
  | "software"
  | "enterprise"
  | "automation";

export const projectFilters: ReadonlyArray<{
  id: ProjectFilter;
  label: string;
}> = [
  { id: "selected", label: "Selected" },
  { id: "all", label: "All work" },
  { id: "software", label: "Engineering" },
  { id: "enterprise", label: "Enterprise" },
  { id: "automation", label: "Automation" },
];

export const featuredProjectIds = [
  "ghl-crm-automation",
  "phishing-detector",
  "battle-chess",
  "lrn-secure-pass",
] as const;

const featuredRank = new Map<string, number>(
  featuredProjectIds.map((id, index) => [id, index]),
);

export const orderedProjects = [...projectsData].sort((a, b) => {
  const aRank = featuredRank.get(a.id) ?? Number.MAX_SAFE_INTEGER;
  const bRank = featuredRank.get(b.id) ?? Number.MAX_SAFE_INTEGER;
  return aRank - bRank;
});

// Newest ad work first.
export const videoAdDisplayOrder = [
  "ugc-luvain",
  "ugc-clairon",
  "ugc-uvola",
  "ugc-trimrx-2",
  "pixar-smooche",
  "ugc-trimrx",
  "ugc-keyla",
  "pixar-bedfoam",
  "pixar-nivea",
  "ugc-tights",
  "ugc-moisturizer",
  "ugc-headphone",
  "ugc-sneaker",
  "ugc-serum",
] as const;

const videoAdRank = new Map<string, number>(
  videoAdDisplayOrder.map((id, index) => [id, index]),
);

export const orderedVideoAds = [...videoAdsData].sort(
  (a, b) =>
    (videoAdRank.get(a.id) ?? Number.MAX_SAFE_INTEGER) -
    (videoAdRank.get(b.id) ?? Number.MAX_SAFE_INTEGER),
);

export const projectPosters: Record<string, string> = {
  "ghl-crm-automation": "/assets/posters/projects/ghl-crm-automation.jpg",
  "battle-chess": "/assets/Projects/battle_chess.png",
  "lrn-secure-pass": "/assets/posters/projects/lrn-secure-pass.jpg",
  "lrn-mp3-streamer": "/assets/Projects/mp3-streamer.png",
  "lrn-genesis-erp": "/assets/posters/projects/lrn-genesis-erp.jpg",
  "lrn-uniform-inspection": "/assets/Projects/uni-ins.png",
  "lrn-survey-system": "/assets/posters/projects/lrn-survey-system.jpg",
  "lrn-driver-request": "/assets/posters/projects/lrn-driver-request.jpg",
  "lrn-benefits-form": "/assets/posters/projects/lrn-benefits-form.jpg",
};

export const impactMetrics = [
  {
    id: "advertising",
    eyebrow: "01 / AD PORTFOLIO",
    value: String(videoAdsData.length),
    unit: "ad examples",
    description:
      "Product videos across beauty, wellness, apparel, and consumer tech.",
    href: "#films",
    action: "Explore the ad portfolio",
  },
  {
    id: "formats",
    eyebrow: "02 / CREATIVE FORMATS",
    value: String(new Set(videoAdsData.map((ad) => ad.category)).size),
    unit: "visual styles",
    description: "UGC-style social creative and stylized 3D product animation.",
    href: "#films",
    action: "Find your creative direction",
  },
  {
    id: "production",
    eyebrow: "03 / CREATIVE PRODUCTION",
    value: "Brief → Ad",
    unit: "visuals + editing",
    description:
      "AI scenes, product cutaways, captions, and sound built around your approved script.",
    href: "#capabilities",
    action: "See how I can help",
  },
] as const;

export const videoPosters: Record<string, string> = Object.fromEntries(
  videoAdsData.map((video) => [
    video.id,
    `/assets/posters/films/${video.id}.jpg`,
  ]),
);

export const mediaBehavior = {
  preload: "metadata" as const,
  mutedByDefault: true,
  playOnDemand: true,
};

export const capabilities = [
  {
    number: "01",
    title: "Creative direction",
    summary:
      "Translate your product brief and approved script into a visual direction, scene plan, and product story.",
    skills: [
      "Brief interpretation",
      "Storyboarding",
      "Visual references",
      "Product storytelling",
    ],
  },
  {
    number: "02",
    title: "AI video production",
    summary:
      "Create AI-led spokesperson scenes, product cutaways, and stylized animation for your chosen ad format.",
    skills: [
      "AI image direction",
      "Generative video",
      "UGC-style scenes",
      "Stylized 3D animation",
    ],
  },
  {
    number: "03",
    title: "Editing & delivery",
    summary:
      "Bring the scenes together with pacing, captions, voice, and sound, then export for the agreed placement.",
    skills: [
      "Video editing",
      "On-screen captions",
      "Voice & sound",
      "Vertical & landscape formats",
    ],
  },
] as const;

export { experiencesData, videoAdsData };
