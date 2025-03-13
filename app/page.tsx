"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { AimObjective } from "@/components/sections/AimsObjectives";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import Roadmap from "@/components/sections/RoadMap";
import Partners from "@/components/sections/Partners";
import { Contributors } from "@/components/contributor-tooltip";

export default function Home() {
  return (
    <div className="bg-black-100 text-white flex items-center justify-center">
      <div className="container min-h-screen max-w-6xl">
        <HeroSection />
        <div className="py-20">
          <FeatureSection />
        </div>

        {/* Benefits */}
        <div className="py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Aims & Objectives
          </h1>
          <AimObjective />
        </div>

        {/* roadmap */}
        <Roadmap />

        {/* partner */}
        <Partners />

        {/* contributors */}
        <Contributors />
      </div>
    </div>
  );
}
