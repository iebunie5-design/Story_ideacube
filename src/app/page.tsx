import { BeforeAfterSection } from "@/sections/BeforeAfterSection";
import { CoreValueSection } from "@/sections/CoreValueSection";
import { DetailFaqSection } from "@/sections/DetailFaqSection";
import { FinalCtaSection } from "@/sections/FinalCtaSection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { ServiceCatalogSection } from "@/sections/ServiceCatalogSection";
import { SolutionPlatformSection } from "@/sections/SolutionPlatformSection";
import { TrustSection } from "@/sections/TrustSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionPlatformSection />
        <ServiceCatalogSection />
        <BeforeAfterSection />
        <CoreValueSection />
        <TrustSection />
        <DetailFaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
