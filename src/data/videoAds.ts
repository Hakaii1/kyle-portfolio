export interface VideoAdItem {
  id: string;
  title: string;
  brand: string;
  category: "ugc" | "pixar";
  categoryLabel: "UGC Social Creative" | "Stylized 3D Animation";
  videoUrl: string;
  description: string;
  aspect: "9:16 Vertical HD" | "16:9 Landscape HD";
  tags: string[];
  creativePipeline: string;
  marketingHook: string;
}

export const videoAdsData: VideoAdItem[] = [
  {
    id: "ugc-uvola",
    title: "Uvola Trial Task",
    brand: "Uvola",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/Uvola%20Trial%20Task.mp4",
    description:
      "UGC-style trial task video created for Uvola and presented as social-first brand creative.",
    aspect: "9:16 Vertical HD",
    tags: ["UGC", "Uvola", "Trial Task"],
    creativePipeline: "UGC production for social media.",
    marketingHook: "Creator-led brand storytelling for Uvola.",
  },
  {
    id: "ugc-keyla",
    title: "Keyla Perfume Body Butter",
    brand: "Keyla Fragrances",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/ugc-keyla.mp4",
    description:
      "Conversational podcast-style UGC ad showcasing Keyla luxury perfume body butter — highlighting 12-hour scent longevity, high-retention direct-response framing, and luxury fragrance dupe positioning.",
    aspect: "9:16 Vertical HD",
    tags: ["Podcast UGC", "Luxury Body Butter", "High-Retention Hook", "D2C Direct-Response"],
    creativePipeline: "AI voice synthesis, conversational interview framing, dynamic captions, and direct-response sound design.",
    marketingHook: "Organic podcast dialogue format capturing attention within the first 2 seconds.",
  },
  {
    id: "pixar-bedfoam",
    title: "CloudRest Adaptive Foam Sleep Ad",
    brand: "CloudRest Sleep Systems",
    category: "pixar",
    categoryLabel: "Stylized 3D Animation",
    videoUrl: "/assets/video-web/films/pixar-bedfoam.mp4",
    description:
      "Whimsical 3D stylized character animation demonstrating adaptive memory foam contouring and weightless spinal alignment with playful orchestral music pacing.",
    aspect: "9:16 Vertical HD",
    tags: ["Pixar 3D Aesthetic", "Character Cinema", "Commercial Storytelling", "Procedural Light"],
    creativePipeline: "Midjourney character consistency, generative 3D shaders, procedural soft-body physics, and cinematic sound sync.",
    marketingHook: "Emotional character connection paired with visceral demonstration of plush comfort.",
  },
  {
    id: "ugc-sneaker",
    title: "HyperStride Kinetic Runner",
    brand: "HyperStride Footwear",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/ugc-sneaker.mp4",
    description:
      "High-energy streetwear UGC video ad emphasizing athletic sole traction, shock absorption, and modern urban lifestyle styling.",
    aspect: "9:16 Vertical HD",
    tags: ["Streetwear UGC", "E-Commerce", "Kinetic Hook", "Viral Format"],
    creativePipeline: "Photorealistic shoe fabrication, camera track velocity, and fast-cut TikTok retention pacing.",
    marketingHook: "Dynamic speed ramps and tactile pavement grip demonstrations.",
  },
  {
    id: "pixar-nivea",
    title: "Nivea Deep Hydration Barrier",
    brand: "Nivea Skincare",
    category: "pixar",
    categoryLabel: "Stylized 3D Animation",
    videoUrl: "/assets/video-web/films/pixar-nivea.mp4",
    description:
      "Animated brand commercial illustrating dermal hydration barriers, macro cellular moisturization, and playful character skincare routines.",
    aspect: "9:16 Vertical HD",
    tags: ["Pixar Animation", "Skincare Commercial", "Cellular VFX", "Brand Aesthetic"],
    creativePipeline: "Micro-fluid particle dynamics, soft skin subsurface scattering, and brand color fidelity.",
    marketingHook: "Scientific cellular moisturization visualized through charming character animation.",
  },
  {
    id: "ugc-headphone",
    title: "Sony XM5 Active Noise Isolation",
    brand: "Sony XM5 Audio",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/ugc-headphone.mp4",
    description:
      "Consumer tech UGC creative demonstrating instant active noise cancellation, deep soundstage isolation, and daily commuting versatility.",
    aspect: "9:16 Vertical HD",
    tags: ["Tech UGC", "Sound Engineering", "Product Demo", "Direct Response"],
    creativePipeline: "Acoustic visualization overlays, photoreal metallic finishes, and creator-style pacing.",
    marketingHook: "Sudden audio cut simulating silence when ANC is activated.",
  },
  {
    id: "ugc-moisturizer",
    title: "HydraGlow Moisture Crème",
    brand: "DermaGlow Skincare",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/ugc-moisturizer.mp4",
    description:
      "D2C beauty UGC highlighting velvety texture spread, rapid non-greasy absorption, and natural morning routine skin illumination.",
    aspect: "9:16 Vertical HD",
    tags: ["Beauty UGC", "Skincare Routine", "Macro Texture", "Ad Creative"],
    creativePipeline: "Emulsion texture simulation, dewy light specular highlights, and natural daylight camera curves.",
    marketingHook: "Extreme macro texture spread showing instant skin glow.",
  },
  {
    id: "ugc-tights",
    title: "Thermal Fleece Lined Tights",
    brand: "CozyFit Apparel",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/ugc-tights.mp4",
    description:
      "Direct-response apparel UGC showing cold-weather comfort, 4-way stretch resilience, and sleek silhouette transitions for lifestyle social campaigns.",
    aspect: "9:16 Vertical HD",
    tags: ["Fashion UGC", "Apparel Conversion", "Macro Fabric", "Lifestyle Hook"],
    creativePipeline: "Fabric stretch physics, organic home lighting, and rapid social media hook structure.",
    marketingHook: "Comparison cut between freezing bare legs vs insulated fleece lining.",
  },
  {
    id: "ugc-serum",
    title: "Cellular Renewal Droplet Serum",
    brand: "Aura Botanics",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/ugc-serum.mp4",
    description:
      "User-testimonial style UGC showcasing targeted dropper application, rapid epidermal penetration, and luminous complexion glow.",
    aspect: "9:16 Vertical HD",
    tags: ["Serum UGC", "Anti-Aging Glow", "Liquid Droplet", "Social Creative"],
    creativePipeline: "Viscous fluid physics, glass refractive realism, and high-CTR marketing angles.",
    marketingHook: "Satisfying macro fluid droplet landing softly on bare skin.",
  },
  {
    id: "ugc-trimrx",
    title: "TrimRx GLP-1 Habits",
    brand: "TrimRx",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/ugc-trimrx.mp4",
    description:
      "A creator-style TrimRx ad framed around weight-loss habits and GLP-1, with a phone-screen-led composition.",
    aspect: "16:9 Landscape HD",
    tags: ["UGC", "TrimRx", "Weight-Loss Habits"],
    creativePipeline: "Creator-style product storytelling with on-screen captions.",
    marketingHook: "Opens with a phone-forward setup and bold captions.",
  },
  {
    id: "ugc-trimrx-2",
    title: "TrimRx Delivery & Check-In",
    brand: "TrimRx",
    category: "ugc",
    categoryLabel: "UGC Social Creative",
    videoUrl: "/assets/video-web/films/ugc-trimrx-2.mp4",
    description:
      "A second creator-style TrimRx ad built around a remote consultation and a delivery/check-in scene.",
    aspect: "16:9 Landscape HD",
    tags: ["UGC", "TrimRx", "Consultation"],
    creativePipeline: "Creator-style scenes with on-screen captions.",
    marketingHook: "Opens on a consultation-style scene.",
  },
  {
    id: "pixar-smooche",
    title: "Smooche Stylized Skincare Ad",
    brand: "Smooche",
    category: "pixar",
    categoryLabel: "Stylized 3D Animation",
    videoUrl: "/assets/video-web/films/pixar-smooche.mp4",
    description:
      "A stylized 3D character spot featuring a close-up skincare scene and on-screen captions.",
    aspect: "9:16 Vertical HD",
    tags: ["Stylized 3D", "Smooche", "Skincare"],
    creativePipeline: "3D-style animation with caption-led framing.",
    marketingHook: "Starts on a tightly framed character close-up.",
  },
];
