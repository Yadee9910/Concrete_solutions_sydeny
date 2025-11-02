import ClientHome from "@/components/home/ClientHome";
import DeliveringExcellence from "@/components/home/DeliveringExcellence";
import HeroSection from "@/components/home/HeroSection";
import Indicators from "@/components/home/Indicators";
import ServicesHome from "@/components/home/ServicesHome";
import WhoWeAre from "@/components/home/WhoweAre";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-5">
        <HeroSection />
        <Indicators />
        <WhoWeAre />
        <ServicesHome />
        <DeliveringExcellence />
        <ClientHome />
      </main>
    </>
  );
}
