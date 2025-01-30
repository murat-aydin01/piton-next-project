import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-52">
      <HeroSection />
      <IntroSection />
      <StatsSection/>
    </div>
  );
}
