
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import WorkHighlights from "@/components/WorkHighlights";
import Certifications from "@/components/Certifications";
import CalendarEmbed from "@/components/CalendarEmbed";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <About />
      <WorkHighlights />
      <Certifications />
      <CalendarEmbed />
      <SocialLinks />
    </main>
  );
};

export default Index;
