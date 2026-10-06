import Hero from "@/components/sections/Hero";
import ImpactStrip from "@/components/sections/ImpactStrip";
import Projects from "@/components/sections/Projects";
import AiVideoAds from "@/components/sections/AiVideoAds";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <AiVideoAds />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}
