import { experiencesData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { videoAdsData } from "@/data/videoAds";

export const siteConfig = {
  name: "Kyle Gulapa",
  initials: "KG",
  email: "kylegulapa06@gmail.com",
  location: "Pampanga, Philippines",
  timezone: "UTC+8",
  availability: "Available for hire",
  resumeUrl: "/assets/Resume/KyleGulapa_Resume.pdf",
  githubUrl: "https://github.com/Hakaii1",
  linkedinUrl: "https://www.linkedin.com/in/kyle-eurie-gulapa/",
} as const;

export const navigation = [
  { id: "work", label: "Work" },
  { id: "films", label: "AI Ads" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
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

// Source video file dates, newest first, verified from the original Videos folder.
export const videoAdDisplayOrder = [
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
    id: "engineering",
    eyebrow: "01 / ENGINEERING",
    value: String(projectsData.length),
    unit: "software projects",
    description:
      "Web, mobile, and enterprise tools shaped around practical workflows.",
    href: "#work",
    action: "Explore selected work",
  },
  {
    id: "advertising",
    eyebrow: "02 / AD CREATIVE",
    value: String(videoAdsData.length),
    unit: "commercial ads",
    description: "Nine UGC spots and three Pixar-style animated ads.",
    href: "#films",
    action: "Watch the full ad reel",
  },
  {
    id: "crm",
    eyebrow: "03 / SYSTEMS CASE STUDY",
    value: "~40 → 20",
    unit: "CRM fields",
    description:
      "A sports-agency GoHighLevel schema consolidated with a decoupled three-stage workflow.",
    href: "#work",
    action: "See the GoHighLevel case study",
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
    title: "Engineering",
    summary:
      "Production-minded web and mobile systems with clear interfaces, secure data flows, and maintainable foundations.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "PHP",
      "Python",
      "Java",
      "MS SQL",
      "Flutter",
      "Dart",
      "Next.js",
    ],
  },
  {
    number: "02",
    title: "Business automation",
    summary:
      "CRM architecture and operational workflows that turn fragmented records and manual handoffs into dependable systems.",
    skills: [
      "GoHighLevel",
      "Workflow automation",
      "Schema design",
      "Webhook integrations",
      "Data migration",
      "Reporting tools",
    ],
  },
  {
    number: "03",
    title: "AI creative",
    summary:
      "Commercial video concepts built around product clarity, strong opening hooks, thoughtful pacing, and polished post-production.",
    skills: [
      "AI image direction",
      "Generative video",
      "UGC concepts",
      "3D-style animation",
      "Editing & sound",
      "Direct-response structure",
    ],
  },
] as const;

export { experiencesData, videoAdsData };
