import HeroSection from "@/components/home/HeroSection";
import Indicators from "@/components/home/Indicators";
import WhoWeAre from "@/components/home/WhoweAre";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-5">
        <HeroSection />
        <Indicators />
        <WhoWeAre />
      </main>
    </>
  );
}
