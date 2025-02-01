import FormSection from "@/components/FormSection";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <FormSection />
    </div>
  );
}
