import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AbstractSection from "@/components/AbstractSection";
import ProblemSection from "@/components/ProblemSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import FutureSection from "@/components/FutureSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AbstractSection />
      <ProblemSection />
      <MethodologySection />
      <ResultsSection />
      <FutureSection />
      <FooterSection />
    </div>
  );
};

export default Index;
