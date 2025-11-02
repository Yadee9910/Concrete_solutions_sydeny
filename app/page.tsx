import HeroSection from "@/components/home/HeroSection";
import Indicators from "@/components/home/Indicators";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-5">
        <HeroSection />
        <Indicators />
      </main>
    </>
  );
}
