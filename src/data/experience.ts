export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "work" | "education";
  description: string;
  achievements: string[];
  skills: string[];
  logo?: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "lrn-internship",
    role: "Full-Stack Web Developer Intern",
    organization: "La Rose Noire",
    location: "Clark Freeport Zone, Pampanga",
    period: "2025 — 2026",
    type: "work",
    description:
      "Contributed to enterprise web applications, internal tools, and database architecture supporting high-volume food manufacturing operations.",
    achievements: [
      "Engineered full-stack digital workflows (PHP, MS SQL) replacing physical paper processes for factory gate clearance, asset tracking, and vehicle dispatch.",
      "Developed an automated sanitation and uniform inspection audit system used by QA supervisors to enforce strict compliance reporting.",
      "Built a synchronized factory-wide audio streaming system with client-host coordination, zone volume management, and shift alarm bells.",
      "Collaborated with cross-functional department heads (HR, QA, Logistics, Operations) to translate operational requirements into reliable software.",
    ],
    skills: ["PHP", "MS SQL", "JavaScript", "HTML5/CSS3", "REST APIs", "Enterprise Systems"],
    logo: "/assets/Images/la-rose-noire-experience.png",
  },
  {
    id: "hau-degree",
    role: "Bachelor of Science in Computer Science",
    organization: "Holy Angel University",
    location: "Angeles City, Pampanga",
    period: "2022 — 2026",
    type: "education",
    description:
      "Comprehensive academic foundation in software development, algorithm design, information security, and distributed architectures.",
    achievements: [
      "Undergraduate Thesis: Facebook Phishing Threat Detector — engineered and published a Chrome Web Store extension utilizing real-time heuristic pattern recognition.",
      "Academic coursework in Data Structures & Algorithms, Database Management Systems, Systems Architecture, and Network Security.",
      "Active contributor to open-source personal tools, game prototypes, and regional cultural preservation initiatives.",
    ],
    skills: ["Data Structures", "Algorithms", "System Architecture", "Security", "Web Engineering"],
    logo: "/assets/Images/hau-seal.png",
  },
];
