export interface VideoAdItem {
  id: string;
  title: string;
  brand: string;
  category: "ugc" | "pixar" | "vsl";
  categoryLabel: "UGC-style Ad" | "Stylized 3D Animation" | "VSL Ad";
  videoUrl: string;
  description: string;
  aspect: "9:16 Vertical HD" | "16:9 Landscape HD";
  tags: string[];
  projectType?: string;
  role?: string;
}

export const videoAdsData: VideoAdItem[] = [
  {
    id: "vsl-halsostodet",
    title: "Hälsostödet VSL Ad",
    brand: "Hälsostödet",
    category: "vsl",
    categoryLabel: "VSL Ad",
    videoUrl: "/assets/video-web/films/vsl-halsostodet.mp4",
    description:
      "A Swedish-language video sales letter combining everyday scenes, explanatory visuals, knee strap demonstrations, and on-screen captions.",
    aspect: "9:16 Vertical HD",
    tags: ["Swedish Language", "VSL", "Product Demonstration"],
  },
  {
    id: "ugc-luvain",
    title: "Luvain Astaxantina Ad",
    brand: "Luvain",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-luvain.mp4",
    description:
      "An Italian-language spokesperson ad with ingredient visuals, product scenes, and on-screen captions.",
    aspect: "9:16 Vertical HD",
    tags: ["Italian Language", "Spokesperson", "Product Scenes"],
    projectType: "Trial project · Client-supplied script",
    role: "AI visuals, video editing, and on-screen captions.",
  },
  {
    id: "ugc-clairon",
    title: "Clairon Intertrigo Relief Cream",
    brand: "Clairon",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-clairon.mp4",
    description:
      "A vertical skincare ad combining application scenes, product imagery, and on-screen captions.",
    aspect: "9:16 Vertical HD",
    tags: ["Skincare Ad", "Captioned Creative", "Product Reveal"],
    projectType: "Trial project · Client-supplied script",
    role: "AI visuals, video editing, and on-screen captions.",
  },
  {
    id: "ugc-uvola",
    title: "Uvola Ad",
    brand: "Uvola",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-uvola.mp4",
    description:
      "A spokesperson-led ad with lifestyle scenes, explanatory visuals, and product cutaways.",
    aspect: "9:16 Vertical HD",
    tags: ["Health UGC", "Talking Head", "Product Cutaways"],
    projectType: "Trial project · Client-supplied script",
    role: "AI visuals, video editing, and on-screen captions.",
  },
  {
    id: "ugc-keyla",
    title: "Keyla Perfume Body Butter",
    brand: "Keyla Fragrances",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-keyla.mp4",
    description:
      "A conversational, podcast-style body butter ad with interview framing and on-screen captions.",
    aspect: "9:16 Vertical HD",
    tags: ["Podcast Style", "Body Care", "Captioned Creative"],
  },
  {
    id: "pixar-bedfoam",
    title: "CloudRest Adaptive Foam Sleep Ad",
    brand: "CloudRest Sleep Systems",
    category: "pixar",
    categoryLabel: "Stylized 3D Animation",
    videoUrl: "/assets/video-web/films/pixar-bedfoam.mp4",
    description:
      "A playful sleep product ad using stylized 3D characters and a comfort-focused story.",
    aspect: "9:16 Vertical HD",
    tags: ["Stylized 3D", "Character Animation", "Product Story"],
  },
  {
    id: "ugc-sneaker",
    title: "HyperStride Kinetic Runner",
    brand: "HyperStride Footwear",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-sneaker.mp4",
    description:
      "A footwear ad combining product details, streetwear scenes, and fast-paced editing.",
    aspect: "9:16 Vertical HD",
    tags: ["Footwear", "Streetwear", "Product Details"],
  },
  {
    id: "pixar-nivea",
    title: "Nivea Deep Hydration Barrier",
    brand: "Nivea Skincare",
    category: "pixar",
    categoryLabel: "Stylized 3D Animation",
    videoUrl: "/assets/video-web/films/pixar-nivea.mp4",
    description:
      "A stylized 3D skincare ad featuring character routines and animated hydration imagery.",
    aspect: "9:16 Vertical HD",
    tags: ["Stylized 3D", "Skincare", "Character Animation"],
  },
  {
    id: "ugc-headphone",
    title: "Sony XM5 Active Noise Isolation",
    brand: "Sony XM5 Audio",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-headphone.mp4",
    description:
      "A creator-style headphone ad with commuting scenes, product details, and audio-focused visuals.",
    aspect: "9:16 Vertical HD",
    tags: ["Consumer Tech", "Product Demo", "Lifestyle Scenes"],
  },
  {
    id: "ugc-moisturizer",
    title: "HydraGlow Moisture Crème",
    brand: "DermaGlow Skincare",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-moisturizer.mp4",
    description:
      "A moisturizer ad built around a morning skincare routine, texture close-ups, and product application.",
    aspect: "9:16 Vertical HD",
    tags: ["Beauty UGC", "Skincare Routine", "Macro Texture", "Ad Creative"],
  },
  {
    id: "ugc-tights",
    title: "Thermal Fleece Lined Tights",
    brand: "CozyFit Apparel",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-tights.mp4",
    description:
      "A winter apparel ad with fabric close-ups, styling transitions, and everyday comfort scenes.",
    aspect: "9:16 Vertical HD",
    tags: ["Fashion", "Fabric Details", "Lifestyle Scenes"],
  },
  {
    id: "ugc-serum",
    title: "Cellular Renewal Droplet Serum",
    brand: "Aura Botanics",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-serum.mp4",
    description:
      "A creator-style serum ad featuring dropper application, texture details, and a skincare routine.",
    aspect: "9:16 Vertical HD",
    tags: ["Skincare", "Product Application", "Texture Details"],
  },
  {
    id: "ugc-trimrx",
    title: "TrimRx GLP-1 Habits",
    brand: "TrimRx",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-trimrx.mp4",
    description:
      "A creator-style TrimRx ad framed around weight-loss habits and GLP-1, with a phone-screen-led composition.",
    aspect: "16:9 Landscape HD",
    tags: ["UGC", "TrimRx", "Weight-Loss Habits"],
  },
  {
    id: "ugc-trimrx-2",
    title: "TrimRx Delivery & Check-In",
    brand: "TrimRx",
    category: "ugc",
    categoryLabel: "UGC-style Ad",
    videoUrl: "/assets/video-web/films/ugc-trimrx-2.mp4",
    description:
      "A second creator-style TrimRx ad built around a remote consultation and a delivery/check-in scene.",
    aspect: "16:9 Landscape HD",
    tags: ["UGC", "TrimRx", "Consultation"],
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
  },
];
