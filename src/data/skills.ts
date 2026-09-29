export interface SkillItem {
  name: string;
  simpleRole: string; // Plain-English title for non-IT users
  level: "Mastery" | "Expert" | "Advanced" | "Proficient";
  levelPercent: number;
  highlight?: boolean;
  application: string; // Plain-English explanation of what it does
  businessValue: string; // Plain-English explanation of why it matters to a business
  benefits: string[]; // 3 simple bullet tags
  capabilities?: string[];
  projects?: string[];
}

export interface SkillCategory {
  id: "frontend" | "backend" | "ai-video" | "automation";
  title: string;
  badge: string;
  tagline: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Web & Mobile Applications",
    badge: "What Visitors See & Click",
    tagline: "Building fast, beautiful websites that work smoothly on phones, tablets, and computers.",
    description:
      "Creating modern, professional web interfaces that load in less than a second, look great on any screen, and make it effortless for customers to browse and take action.",
    skills: [
      {
        name: "TypeScript",
        simpleRole: "Bug Prevention & Stability",
        level: "Advanced",
        levelPercent: 92,
        highlight: true,
        application:
          "A modern programming language that catches mistakes and glitches while code is being written, preventing websites and apps from crashing when customers use them.",
        businessValue: "Protects your business from costly downtime and user frustration by making sure software runs reliably.",
        benefits: ["Catches Bugs Early", "Prevents App Crashes", "Smooth Performance"],
        projects: ["Facebook Threat Detector", "Battle Chess Engine", "Portfolio Site"],
      },
      {
        name: "React 19 / Next.js",
        simpleRole: "Fast, Modern Web Apps",
        level: "Advanced",
        levelPercent: 90,
        highlight: true,
        application:
          "The industry standard framework for building lightning-fast web applications that update instantly when clicked without having to refresh the page.",
        businessValue: "Keeps visitors on your website by loading pages almost instantly, boosting visitor engagement and sales.",
        benefits: ["Instant Page Loading", "Smooth Interactions", "Great for Google Rankings"],
        projects: ["Production Web Apps", "Tactical Chess UI", "Interactive Portfolios"],
      },
      {
        name: "Tailwind CSS",
        simpleRole: "Polished Visual Styling",
        level: "Expert",
        levelPercent: 95,
        highlight: true,
        application:
          "A modern design styling toolkit used to craft clean layouts, colors, and typography with exact precision across all devices.",
        businessValue: "Creates a cohesive, premium brand appearance that looks clean, modern, and professional on any device.",
        benefits: ["Custom Brand Themes", "Pixel-Perfect Layouts", "Dark & Light Mode"],
        projects: ["Enterprise Tool Dashboards", "Landing Pages", "Design Systems"],
      },
      {
        name: "HTML5 Semantic Web",
        simpleRole: "Clean Website Structure",
        level: "Expert",
        levelPercent: 98,
        application:
          "The fundamental blueprint of every web page, structured cleanly so search engines like Google can find it easily and people with disabilities can navigate it.",
        businessValue: "Helps your site rank higher on Google search results and ensures complete accessibility for all potential customers.",
        benefits: ["Better Google Rankings", "Accessibility (WCAG AA)", "Clean Page Outline"],
        projects: ["Published Web Store Extension", "Enterprise Web Apps"],
      },
      {
        name: "Modern CSS / Grid & Flex",
        simpleRole: "Responsive Page Layouts",
        level: "Expert",
        levelPercent: 95,
        application:
          "Layout techniques that arrange cards, menus, images, and text cleanly so they never overlap, glitch, or look awkward on different monitor sizes.",
        businessValue: "Eliminates visual bugs and guarantees your business content looks tidy and readable on every display.",
        benefits: ["Zero Overlapping Content", "Fluid Columns", "Clean Organization"],
        projects: ["Bento Layouts", "Responsive Portals", "Custom Components"],
      },
      {
        name: "Framer Motion",
        simpleRole: "Subtle Micro-Animations",
        level: "Advanced",
        levelPercent: 82,
        application:
          "Smooth, natural animations when opening menus, hovering over buttons, or scrolling through content.",
        businessValue: "Makes the website feel alive, high-end, and polished rather than static and outdated.",
        benefits: ["Smooth Button Feedback", "Elegant Transitions", "Engaging User Experience"],
        projects: ["Interactive Showcases", "Animated Modals"],
      },
      {
        name: "Responsive UI/UX",
        simpleRole: "Mobile & Tablet Optimization",
        level: "Expert",
        levelPercent: 94,
        highlight: true,
        application:
          "Designing interfaces so buttons are easy to tap with a thumb on smartphones and information is clearly legible without zooming in.",
        businessValue: "Over 60% of web traffic comes from smartphones; a flawless mobile layout prevents lost customers.",
        benefits: ["Touch-Friendly Buttons", "Readable on Phones", "Adapts to Any Device"],
        projects: ["Sulyap Kapampangan App", "Enterprise Portals"],
      },
    ],
  },
  {
    id: "backend",
    title: "Data & Business Systems",
    badge: "The Engine Behind the Scenes",
    tagline: "Storing business data safely and connecting your company's software tools.",
    description:
      "Engineering secure back-end systems that manage user logins, save customer records without data loss, and connect your website with payment systems and third-party tools.",
    skills: [
      {
        name: "Node.js",
        simpleRole: "Fast Server Engine",
        level: "Advanced",
        levelPercent: 86,
        highlight: true,
        application:
          "A high-speed server technology that runs behind the scenes to fetch data, handle user accounts, and power website features rapidly.",
        businessValue: "Handles thousands of simultaneous website visitors smoothly without slowing down or crashing.",
        benefits: ["Fast Response Times", "Handles High Traffic", "Powers Live Features"],
        projects: ["Media Stream Downloader", "Full-Stack Web Servers"],
      },
      {
        name: "PHP (Vanilla & MVC)",
        simpleRole: "Enterprise Company Portals",
        level: "Advanced",
        levelPercent: 90,
        highlight: true,
        application:
          "The trusted server language used to build internal company portals, employee tools, and factory tracking systems at manufacturing firm La Rose Noire.",
        businessValue: "Automates daily company operations and paperwork, preventing human error in factory audits.",
        benefits: ["Secure Staff Logins", "Factory Audit Compliance", "Reliable Daily Operations"],
        projects: ["Sanitation Compliance Portal", "Genesis ERP Modules", "Fleet Dispatcher"],
      },
      {
        name: "MS SQL Server",
        simpleRole: "Secure Corporate Database",
        level: "Advanced",
        levelPercent: 88,
        highlight: true,
        application:
          "A corporate database system by Microsoft used to store manufacturing audit logs, vehicle dispatch history, and staff permissions safely.",
        businessValue: "Guarantees that vital company records and compliance logs are safely archived and never lost.",
        benefits: ["Zero Data Loss", "Audit Trail History", "Handles Millions of Records"],
        projects: ["La Rose Noire Manufacturing DB", "SecurePass Gate System"],
      },
      {
        name: "PostgreSQL",
        simpleRole: "Modern Cloud Database",
        level: "Proficient",
        levelPercent: 80,
        application:
          "A reliable, modern database used by major tech companies to store customer profiles, orders, and application settings securely.",
        businessValue: "Keeps customer accounts and business information organized, secure, and rapidly searchable.",
        benefits: ["High Reliability", "Fast Data Lookups", "Scales with Growth"],
        projects: ["Modern Web App Databases"],
      },
      {
        name: "REST APIs & Webhooks",
        simpleRole: "Connecting Software Together",
        level: "Expert",
        levelPercent: 94,
        highlight: true,
        application:
          "The digital pipelines that allow different programs to talk to each other — like connecting your website to Stripe payments, email marketing, or inventory tools.",
        businessValue: "Saves staff hundreds of hours by automatically moving data between tools without manual copy-pasting.",
        benefits: ["Seamless Integrations", "Real-Time Notifications", "No Manual Copy-Pasting"],
        projects: ["CRM Automation Engine", "Survey Analytics Platform"],
      },
      {
        name: "Database Organization",
        simpleRole: "Clean & Organized Records",
        level: "Expert",
        levelPercent: 92,
        application:
          "Cleaning and restructuring messy customer data spreadsheets so there are no duplicate entries, confusing fields, or missing contacts.",
        businessValue: "Consolidated 40+ messy data fields down to 20 organized master fields for a sports agency, preventing duplicated contacts.",
        benefits: ["No Duplicate Contacts", "Organized Customer Data", "Fast Staff Searches"],
        projects: ["GoHighLevel CRM Consolidation", "HR Benefits Database"],
      },
      {
        name: "Python",
        simpleRole: "Task Automation Scripts",
        level: "Advanced",
        levelPercent: 82,
        application:
          "Writing quick computer scripts to process bulk spreadsheets, convert files, and handle repetitive office tasks in seconds.",
        businessValue: "Replaces hours of repetitive computer work with a script that runs in seconds with zero mistakes.",
        benefits: ["Instant File Conversions", "Batch Processing", "Saves Hours of Time"],
        projects: ["Batch Processing Scripts", "FFmpeg Automation"],
      },
    ],
  },
  {
    id: "ai-video",
    title: "AI Video & Commercial Creative",
    badge: "Attention-Grabbing Media",
    tagline: "Producing studio-quality video ads that turn viewers into paying customers.",
    description:
      "Creating high-converting social media video ads using modern AI visual tools, engaging pacing, and psychology-backed hooks that stop the scroll.",
    skills: [
      {
        name: "Midjourney V6",
        simpleRole: "Photorealistic AI Imagery",
        level: "Mastery",
        levelPercent: 96,
        highlight: true,
        application:
          "Generates studio-quality product photos, human model imagery, and luxury brand scenes using artificial intelligence without expensive photo shoots.",
        businessValue: "Cuts commercial photography production costs by up to 80% while delivering magazine-quality visuals.",
        benefits: ["Studio-Quality Lighting", "Custom Brand Scenes", "Fast Turnaround Time"],
        projects: ["Keyla Perfume UGC", "Nivea Skin Commercial", "CloudRest 3D Narrative"],
      },
      {
        name: "Runway Gen-2 & Gen-3",
        simpleRole: "Cinematic AI Video Footage",
        level: "Expert",
        levelPercent: 90,
        highlight: true,
        application:
          "Transforms still product photos into fluid, cinematic video clips with lifelike camera angles and realistic physics motion.",
        businessValue: "Creates captivating video ads for social media without hiring camera crews, models, or renting film studios.",
        benefits: ["Cinematic Camera Motion", "Realistic Visual Effects", "Unique Ad Creatives"],
        projects: ["HyperStride Kinetic Ad", "Cellular Droplet Serum"],
      },
      {
        name: "Luma Dream Machine",
        simpleRole: "Smooth 3D Video Motion",
        level: "Expert",
        levelPercent: 88,
        application:
          "Generates ultra-smooth 3D camera sweeps and macro close-ups of products in motion for modern social media ads.",
        businessValue: "Makes products look premium and trustworthy, improving perceived value and buyer confidence.",
        benefits: ["Ultra-Smooth Motion", "Dynamic Product Angles", "High Visual Quality"],
        projects: ["CloudRest Adaptive Sleep Ad"],
      },
      {
        name: "CapCut Pro & Premiere",
        simpleRole: "Commercial Video Editing",
        level: "Mastery",
        levelPercent: 96,
        highlight: true,
        application:
          "Editing video clips into snappy, fast-paced commercials with synced background music, dynamic animated subtitles, and crisp sound design.",
        businessValue: "Keeps viewers engaged from the first second all the way to the final call-to-action so they click and buy.",
        benefits: ["Snappy Video Pacing", "Engaging Subtitles", "Crisp Sound Design"],
        projects: ["8 Commercial Ad Creatives", "Audio-Synced Reels"],
      },
      {
        name: "AI Voice Synthesis",
        simpleRole: "Natural Voiceover Narration",
        level: "Expert",
        levelPercent: 92,
        application:
          "Creates natural, friendly human-sounding voice narration to explain product benefits clearly in video ads.",
        businessValue: "Eliminates the delays and expense of hiring voice actors, allowing fast testing of multiple ad scripts.",
        benefits: ["Natural Human Sound", "Consistent Brand Voice", "Rapid Script Testing"],
        projects: ["Keyla UGC Ad", "Sony XM5 Lifestyle Ad"],
      },
      {
        name: "UGC Retention Hooks",
        simpleRole: "First-3-Second Scroll Stoppers",
        level: "Mastery",
        levelPercent: 95,
        highlight: true,
        application:
          "Crafting visual and spoken opening hooks designed specifically to stop people from scrolling past the ad on TikTok, Instagram, and Facebook.",
        businessValue: "Directly improves advertising profit by capturing more attention in the critical first 3 seconds of viewing.",
        benefits: ["Stops Social Scrolling", "Higher Click-Through Rates", "Lower Ad Spend Costs"],
        projects: ["D2C E-commerce Social Campaigns"],
      },
      {
        name: "Direct-Response Strategy",
        simpleRole: "Sales-Driven Ad Structure",
        level: "Expert",
        levelPercent: 92,
        application:
          "Structuring video scripts around real customer problems, showcasing clear benefits, and telling viewers exactly what to do next to purchase.",
        businessValue: "Ensures marketing budget results in actual product sales rather than just passive, non-converting views.",
        benefits: ["Clear Call-to-Action", "Addresses Customer Doubts", "Proven Sales Structure"],
        projects: ["Thermal Fleece Lined Tights", "HydraGlow Moisture"],
      },
    ],
  },
  {
    id: "automation",
    title: "Automation & Business Tools",
    badge: "Saving Hours of Manual Work",
    tagline: "Automating customer follow-ups and building custom tools to save time.",
    description:
      "Connecting business tools, automating lead responses so no sales inquiry is missed, and building custom software that speeds up daily operations.",
    skills: [
      {
        name: "GoHighLevel (GHL)",
        simpleRole: "All-in-One Sales & CRM Platform",
        level: "Mastery",
        levelPercent: 98,
        highlight: true,
        application:
          "A business platform that centralizes customer inquiries, appointment bookings, automated emails, and sales pipelines into one organized hub.",
        businessValue: "Re-engineered a 20-field master CRM for a sports agency that cut lead response turnaround times by 50%.",
        benefits: ["Centralized Lead Inbox", "Organized Sales Pipeline", "Zero Lost Inquiries"],
        projects: ["Enterprise CRM Architecture Case Study"],
      },
      {
        name: "Workflow Automation",
        simpleRole: "Instant Lead Follow-Ups",
        level: "Expert",
        levelPercent: 94,
        highlight: true,
        application:
          "Automated systems that immediately text and email potential clients when they fill out a form, so they get an instant response 24/7.",
        businessValue: "Reaches interested buyers within 60 seconds automatically, before they look at a competing company.",
        benefits: ["Instant 60s Lead Response", "Automated SMS & Email", "Hands-Free Follow-Up"],
        projects: ["Lead Qualifier Engines", "Driver Request Workflows"],
      },
      {
        name: "Git & GitHub",
        simpleRole: "Code Backup & Project Safety",
        level: "Advanced",
        levelPercent: 90,
        application:
          "The world-standard system for backing up project files and tracking every revision, ensuring work is never lost or accidentally deleted.",
        businessValue: "Guarantees complete safety and revision history of project files, allowing seamless collaboration.",
        benefits: ["Safe Cloud Backups", "Full Version History", "Safe Code Updates"],
        projects: ["Chrome Extension Releases", "Open Source Repositories"],
      },
      {
        name: "Google Chrome Extensions",
        simpleRole: "Custom Browser Tools",
        level: "Expert",
        levelPercent: 92,
        highlight: true,
        application:
          "Building custom add-on tools that run directly inside Google Chrome to automate tasks or protect people as they browse the web.",
        businessValue: "Built and published a live threat detector on the Chrome Web Store that alerts users to phishing threats on Facebook.",
        benefits: ["Published on Web Store", "Runs Inside Chrome", "Real-Time User Alerts"],
        projects: ["Facebook Phishing Threat Detector (Web Store)"],
      },
      {
        name: "FFmpeg Media Automation",
        simpleRole: "Fast Video & Audio Converter",
        level: "Advanced",
        levelPercent: 86,
        application:
          "A high-speed tool that converts, resizes, and compresses heavy video and audio files in seconds without quality degradation.",
        businessValue: "Compresses large video files for website hosting, making web pages load much faster and saving hosting costs.",
        benefits: ["Smaller File Sizes", "No Quality Loss", "Batch File Processing"],
        projects: ["FFmpeg Batch Converter", "MP3 Tagging Engine"],
      },
      {
        name: "Cloud Hosting & Deployment",
        simpleRole: "Reliable Worldwide Hosting",
        level: "Advanced",
        levelPercent: 88,
        application:
          "Publishing websites and apps on fast global cloud networks (Vercel) so they stay online 24/7 and load instantly anywhere in the world.",
        businessValue: "Provides 99.9% uptime with bank-grade security, automatic SSL certificates, and zero server maintenance headaches.",
        benefits: ["99.9% Reliable Uptime", "Global Instant Loading", "Automatic Security (SSL)"],
        projects: ["Next.js Production Web Deployments"],
      },
    ],
  },
];

