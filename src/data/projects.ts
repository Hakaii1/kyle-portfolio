export interface CaseStudyData {
  title: string;
  role: string;
  clientContext: string;
  techStack: string[];
  summary: string;
  problem: { title: string; detail: string }[];
  schemaFolders: {
    name: string;
    count: string;
    fields: string[];
    note?: string;
  }[];
  deduplication: string[];
  automations: {
    id: string;
    name: string;
    trigger: string;
    logic: string;
    image?: string;
  }[];
  migration: string[];
  results: { metric: string; label: string; desc: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "all" | "featured" | "software" | "enterprise";
  categoryLabel: string;
  description: string;
  problemSolved: string;
  techStack: string[];
  image?: string;
  images?: string[];
  imageLabels?: string[];
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  externalUrl?: string;
  isEnterpriseProprietary?: boolean;
  hasCaseStudy?: boolean;
  caseStudy?: CaseStudyData;
}

export const projectsData: ProjectItem[] = [
  {
    id: "ghl-crm-automation",
    title: "GoHighLevel CRM Architecture & Automation Engine",
    tagline: "Enterprise CRM Schema Consolidation & Decoupled Workflow Pipelines",
    category: "featured",
    categoryLabel: "Automation Architecture",
    description:
      "Engineered a consolidated 20-field master schema and decoupled 3-stage automation engine for an international sports agency, eliminating workflow dropouts and cutting database field redundancy by 50%.",
    problemSolved:
      "Resolved duplicate contact creation caused by missing primary keys, condensed ~40 scattered and overlapping custom fields, and transformed fragile monolithic workflows into reliable, decoupled event-driven triggers.",
    techStack: [
      "GoHighLevel (GHL)",
      "Webhook Integrations",
      "Dynamic Form Mapping",
      "CSV Data Migration",
      "Deduplication Logic",
    ],
    video: "/assets/video-web/projects/ghl-crm-automation.mp4",
    hasCaseStudy: true,
    caseStudy: {
      title: "GoHighLevel CRM Architecture & Multi-Stage Automation Engine",
      role: "Lead CRM Developer / Full-Stack System Architect",
      clientContext: "International Sports Placement & Athlete Management Agency",
      techStack: [
        "GoHighLevel (GHL)",
        "REST Webhooks",
        "Conditional Logic Engine",
        "Automated Attribution Tags",
        "COALESCE Data Migration",
      ],
      summary:
        "Redesigned the entire CRM foundation of an international athlete placement agency. Overhauled a fragmented database of ~40 unindexed fields into a clean 20-field master taxonomy across 4 logical folders, paired with a bulletproof 3-stage automation engine with 100% execution reliability.",
      problem: [
        {
          title: "Database Bloat & Schema Inconsistency",
          detail:
            "Over ~40 duplicate and redundant custom fields (e.g. multiple distinct fields tracking playing position, league level, and lead source) causing erratic data entry and unreliable reporting.",
        },
        {
          title: "Monolithic Workflow Execution Failures",
          detail:
            "Single-canvas automations frequently timed out or aborted whenever incoming prospect leads omitted optional conditional fields, causing leads to go uncontacted.",
        },
        {
          title: "Uncontrolled Contact Record Duplication",
          detail:
            "Intake forms without mandatory unique identifiers (Email/Phone primary keys) flooded the CRM with orphaned, disjointed duplicate records.",
        },
      ],
      schemaFolders: [
        {
          name: "1. Personal & Demographics",
          count: "2 Custom Fields",
          fields: [
            "Nationality (Single Line)",
            "Current Residence Location (Single Line)",
          ],
          note: "Seamlessly unified with GHL native identity fields: First Name, Last Name, Email, Phone, DOB",
        },
        {
          name: "2. Athlete Playing Profile",
          count: "10 Custom Fields",
          fields: [
            "Primary Playing Position (Dropdown: GK, DEF, MID, FWD)",
            "Current Playing Level / Division",
            "Current Club / Academy Team",
            "Highlight Reel / Game Footage URL",
            "Transfermarkt / Athlete Profile URL",
            "Dominant Foot (Dropdown: Left, Right, Both)",
            "Biometrics (Height cm, Weight kg)",
            "Years of Competitive Experience",
            "Playing & Injury History",
          ],
        },
        {
          name: "3. Pro Pathway Application Criteria",
          count: "5 Custom Fields",
          fields: [
            "EU Passport Holder (Radio: Yes / No)",
            "Able to Fund Relocation (Radio: Yes / No)",
            "Target Relocation Window (Date Picker)",
            "Athlete Career Goals & Aspirations",
            "Marketing Channel Source Attribution",
          ],
        },
        {
          name: "4. Inquiries & Support Routing",
          count: "3 Custom Fields",
          fields: [
            "Inquiry Classification (Billing, Trial Application, General)",
            "Direct Inquiry Message Details",
            "Preferred Outreach Channel (Email, SMS, WhatsApp)",
          ],
        },
      ],
      deduplication: [
        "Primary Key Enforcement: Made email mandatory across all 5 intake forms to automatically engage GHL's global deduplication engine.",
        "Attribution Tagging: Replaced repetitive custom fields with clean, standardized submission tags (e.g., submitted-form-1) on the contact activity timeline.",
      ],
      automations: [
        {
          id: "Workflow A1",
          name: "Highlight Notification Router",
          trigger: "Prospect Intake Form Submission",
          logic:
            "Instantly notifies recruitment scouts with structured athlete positioning, footage link, and clearance credentials.",
        },
        {
          id: "Workflow A2",
          name: "Conditional Lead Qualifier",
          trigger: "Pathway Application Submission",
          logic:
            "Evaluates EU Passport = Yes AND Relocation Funding = Yes. Dynamically flags contact with 'Priority-Qualified' tag and initiates high-touch agent scheduling.",
        },
        {
          id: "Workflow A3",
          name: "Omnichannel Auto-Responder",
          trigger: "Support & Inquiry Submission",
          logic:
            "Reads Preferred Contact Method and immediately routes tailored confirmations via Email or SMS/WhatsApp webhooks.",
        },
      ],
      migration: [
        "Dual-Trigger Buffer: Configured active triggers to accept legacy or new field variables during form updates so incoming leads were never dropped.",
        "COALESCE Transformation: Executed a database merge script to coalesce disparate legacy columns into the new Master Schema taxonomy.",
        "Safe Re-import: Re-imported transformed records using Email as matching primary key with 'Update Existing Records' enabled.",
      ],
      results: [
        {
          metric: "50%",
          label: "Redundancy Reduction",
          desc: "Condensed ~40 scattered and conflicting fields into 20 structured master attributes.",
        },
        {
          metric: "100%",
          label: "Execution Reliability",
          desc: "Decoupled 3-stage workflows completely eliminated pipeline dropouts across all forms.",
        },
        {
          metric: "Zero",
          label: "Duplicate Records",
          desc: "Primary key enforcement and automated tag attribution ensured clean single-source-of-truth contacts.",
        },
      ],
    },
  },
  {
    id: "phishing-detector",
    title: "Facebook Phishing Threat Detector",
    tagline: "Heuristic Pattern Recognition Browser Extension",
    category: "software",
    categoryLabel: "Cybersecurity & Extension",
    description:
      "A published Chrome Web Store security extension that intercepts, analyzes, and neutralizes deceptive phishing URLs and credential harvesting forms on social media platforms in real time.",
    problemSolved:
      "Protects non-technical users against sophisticated credential stealing attacks that disguise themselves as legitimate Facebook security notifications.",
    techStack: [
      "JavaScript",
      "Chrome Extension Manifest V3",
      "Heuristic Pattern Engine",
      "DOM Security Parser",
      "Regex Threat Matrix",
    ],
    image: "/assets/Projects/Extension.png",
    githubUrl: "https://github.com/Gamakichii/Thesis",
    liveUrl:
      "https://chromewebstore.google.com/detail/facebook-phishing-detecto/gijaklfaegcklbdgikikgocmedcohmdl",
  },
  {
    id: "battle-chess",
    title: "Battle Chess Tactical Engine",
    tagline: "Real-Time Combat Strategy Web Game",
    category: "software",
    categoryLabel: "Interactive Web App",
    description:
      "A tactical modernization of classic chess introducing real-time combat resolution, custom piece HP/attack stats, and animated turn-based board synchronization.",
    problemSolved:
      "Transformed traditional static board game mechanics into an engaging tactical RPG experience with deterministic collision and state management.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 Canvas",
      "Custom Game Loop",
    ],
    video: "/assets/video-web/projects/battle-chess.mp4",
    image: "/assets/Projects/battle_chess.png",
    githubUrl: "https://github.com/Hakaii1/chess",
    liveUrl: "https://hakaii1.github.io/chess/",
  },
  {
    id: "sulyap-kapampangan",
    title: "Sulyap Kapampangan Mobile App",
    tagline: "Gamified Cultural & Language Preservation App",
    category: "software",
    categoryLabel: "Mobile Application",
    description:
      "An interactive mobile learning platform designed to preserve and promote the Kapampangan regional language through spaced repetition, vocabulary quizzes, and dialect challenges.",
    problemSolved:
      "Combats dialect erosion among younger generations with an intuitive, gamified quiz platform built for mobile-first engagement.",
    techStack: [
      "React Native",
      "JavaScript",
      "Local State Caching",
      "Gamification Logic",
      "Custom Sound FX",
    ],
    image: "/assets/Projects/Sulyap.png",
    githubUrl: "https://github.com/Gamakichii/sulyap_kapampangan-og",
    externalUrl:
      "https://drive.google.com/file/d/1LM_QiIAx7sjftbbsuZt3utUyp-ytqUmx/view",
  },
  {
    id: "mp3-downloader-tool",
    title: "Media Stream Downloader & Tagging Engine",
    tagline: "High-Performance Audio Extraction & Metadata Pipeline",
    category: "software",
    categoryLabel: "Developer Utility",
    description:
      "Backend utility for extracting high-bitrate audio streams from media providers, automatically applying ID3 tags, album art embed, and track normalization.",
    problemSolved:
      "Automated the tedious manual workflow of searching, downloading, and cataloging missing audio tracks and metadata for local collections.",
    techStack: ["Python", "FFmpeg", "ID3 Tagging", "REST APIs", "Async IO"],
    image: "/assets/Projects/mp3-downloader.png",
    githubUrl: "https://github.com/Hakaii1/MP3-Downloader",
  },
  {
    id: "file-converter-utility",
    title: "FFmpeg Batch Media Converter",
    tagline: "Local File Transcoding & Optimization CLI & GUI",
    category: "software",
    categoryLabel: "Developer Utility",
    description:
      "A versatile local batch processing tool for transmuting audio, video, and image codecs without file size upload constraints or privacy risks.",
    problemSolved:
      "Eliminates reliance on privacy-invasive third-party conversion sites with rapid, native hardware-accelerated local transcoding.",
    techStack: ["Node.js", "FFmpeg Core", "CLI Design", "Stream Buffering"],
    image: "/assets/Projects/image-converter.png",
    githubUrl: "https://github.com/Hakaii1/file-converter",
  },
  {
    id: "lrn-secure-pass",
    title: "SecurePass Gate & Asset Management",
    tagline: "Corporate Visitor & Equipment Clearance System",
    category: "enterprise",
    categoryLabel: "Enterprise Solution // La Rose Noire",
    description:
      "Engineered multi-tier authorization workflows for visitor gate clearance and factory asset egress, synchronizing guardhouse approvals with department heads in real time.",
    problemSolved:
      "Replaced physical carbon-copy paper gate passes with an auditable, timestamped digital verification workflow.",
    techStack: ["PHP", "MS SQL", "JavaScript", "HTML5/CSS3", "Role-Based Auth"],
    video: "/assets/video-web/projects/lrn-secure-pass.mp4",
    isEnterpriseProprietary: true,
  },
  {
    id: "lrn-mp3-streamer",
    title: "Synchronized Factory MP3 Streamer",
    tagline: "Real-Time Centralized Audio & Bell Scheduling",
    category: "enterprise",
    categoryLabel: "Enterprise Solution // La Rose Noire",
    description:
      "Client-host audio streaming system with central dynamic playlist dispatching, zone volume control, and automated shift bell alarms across manufacturing halls.",
    problemSolved:
      "Provided automated, synchronized audio broadcasting across disparate factory zones without desync or latency stutter.",
    techStack: ["PHP", "JavaScript Audio API", "MS SQL", "Scheduled Cron"],
    video: "/assets/video-web/projects/lrn-mp3-streamer.mp4",
    image: "/assets/Projects/mp3-streamer.png",
    isEnterpriseProprietary: true,
  },
  {
    id: "lrn-genesis-erp",
    title: "Genesis Manufacturing ERP Modules",
    tagline: "Food Manufacturing Optimization & Batch Tracking",
    category: "enterprise",
    categoryLabel: "Enterprise Solution // La Rose Noire",
    description:
      "Contributed to core ERP modules optimizing production batch handoffs, inventory stock counts, and cross-departmental record synchronization.",
    problemSolved:
      "Reduced production handoff delays and streamlined material requisition between kitchen departments and dispatch warehouses.",
    techStack: ["Vanilla PHP", "MS SQL", "Relational Database Design", "UI/UX"],
    video: "/assets/video-web/projects/lrn-genesis-erp.mp4",
    isEnterpriseProprietary: true,
  },
  {
    id: "lrn-uniform-inspection",
    title: "Sanitation & Uniform Compliance System",
    tagline: "Quality Assurance & Workforce Audit Analytics",
    category: "enterprise",
    categoryLabel: "Enterprise Solution // La Rose Noire",
    description:
      "Digital audit portal for food safety supervisors to log, track, and score hygiene compliance before cleanroom entrance, generating daily incident reports.",
    problemSolved:
      "Enforced strict international food safety hygiene standards through standardized digital checklist logging.",
    techStack: ["PHP", "MS SQL", "Responsive UI", "Automated Reporting"],
    video: "/assets/video-web/projects/lrn-uniform-inspection.mp4",
    image: "/assets/Projects/uni-ins.png",
    isEnterpriseProprietary: true,
  },
  {
    id: "lrn-survey-system",
    title: "Enterprise Survey & Feedback Platform",
    tagline: "Custom Form Builder & Real-Time Analytics",
    category: "enterprise",
    categoryLabel: "Enterprise Solution // La Rose Noire",
    description:
      "Enterprise platform for employee feedback analytics, featuring custom dynamic form builders, automated scoring, and real-time visualization dashboards.",
    problemSolved:
      "Provided leadership with actionable workforce sentiment analytics and streamlined company-wide internal surveying.",
    techStack: ["PHP", "MS SQL", "Chart.js", "Dynamic Forms", "Analytics"],
    video: "/assets/video-web/projects/lrn-survey-system.mp4",
    isEnterpriseProprietary: true,
  },
  {
    id: "lrn-driver-request",
    title: "Fleet Logistics & Driver Request System",
    tagline: "Vehicle Scheduling & Real-Time Approval Workflows",
    category: "enterprise",
    categoryLabel: "Enterprise Solution // La Rose Noire",
    description:
      "Streamlined corporate vehicle dispatch and shuttle scheduling with automated manager approvals, driver assignments, and trip logging.",
    problemSolved:
      "Eliminated scheduling collisions and automated the requisition process for corporate vehicle dispatch and cargo transport.",
    techStack: ["PHP", "MS SQL", "Scheduling Logic", "Approval Routing"],
    video: "/assets/video-web/projects/lrn-driver-request.mp4",
    isEnterpriseProprietary: true,
  },
  {
    id: "lrn-benefits-form",
    title: "Centralized HR Benefits Digital Portal",
    tagline: "Employee Self-Service & Benefits Request System",
    category: "enterprise",
    categoryLabel: "Enterprise Solution // La Rose Noire",
    description:
      "Centralized digital self-service portal for HR claims, leave benefits, and employee service forms with intuitive routing to payroll.",
    problemSolved:
      "Replaced paper benefit claim submissions with a transparent, trackable digital submission and review pipeline.",
    techStack: ["PHP", "MS SQL", "HTML5/CSS3", "Workflow Logic"],
    video: "/assets/video-web/projects/lrn-benefits-form.mp4",
    isEnterpriseProprietary: true,
  },
];
