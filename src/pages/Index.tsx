
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import WorkHighlights from "@/components/WorkHighlights";
import Certifications from "@/components/Certifications";
import CalendarEmbed from "@/components/CalendarEmbed";
import SocialLinks from "@/components/SocialLinks";
import CustomCursor from "@/components/CustomCursor";
import LoadingAnimation from "@/components/LoadingAnimation";
import FloatingResumeButton from "@/components/FloatingResumeButton";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <main className={`min-h-screen bg-white transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <CustomCursor />
          <FloatingResumeButton />
          
          
          <HeroSection />
          <About />
          <WorkHighlights />
          <Certifications />
          <CalendarEmbed />
          <SocialLinks />
        </main>
      )}
    </>
  );
};

export default Index;
