import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { ClaimSection } from "./components/ClaimSection";
import { InfluencerSection } from "./components/InfluencerSection";
import { ScienceSection } from "./components/ScienceSection";
import { PlaceboSection } from "./components/PlaceboSection";
import { ScientificProcessSection } from "./components/ScientificProcessSection";
import { RisksSection } from "./components/RisksSection";
import { LongTermSection } from "./components/LongTermSection";
import { RegulationSection } from "./components/RegulationSection";
import { VerdictSection } from "./components/VerdictSection";
import { CitationsSection } from "./components/CitationsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <ClaimSection />
      <InfluencerSection />
      <ScienceSection />
      <PlaceboSection />
      <ScientificProcessSection />
      <RisksSection />
      <LongTermSection />
      <RegulationSection />
      <VerdictSection />
      <CitationsSection />
    </div>
  );
}