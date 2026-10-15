import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandBanner } from "@/components/BrandBanner";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { AntACareSpotlight } from "@/components/AntACareSpotlight";
import { MemberStories } from "@/components/MemberStories";
import { Gallery } from "@/components/Gallery";
import { WhyAntA } from "@/components/WhyAntA";
import { ComingSoon } from "@/components/ComingSoon";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SpecsSheet } from "@/components/SpecsSheet";
import { StickyCTA } from "@/components/StickyCTA";
import { GrainOverlay } from "@/components/GrainOverlay";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <GrainOverlay />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <BrandBanner />
          <About />
          <Solutions />
          <AntACareSpotlight />
          <MemberStories />
          <Gallery />
          <WhyAntA />
          <ComingSoon />
          <Contact />
        </main>
        <Footer />
        <SpecsSheet />
        <StickyCTA />
      </div>
    </div>
  );
}
