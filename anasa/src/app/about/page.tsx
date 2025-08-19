"use server";

import React from "react";
import Hero from "@/components/shared/hero/Hero";
import Section from "@/components/shared/Section";
import Roadmap from "@/components/shared/Roadmap";
import Gallery from "@/components/shared/Gallery";
import { useCachedPage } from "@/hooks/useCachedPage";
import { IContentfulInterface } from "@/interface/IContentfulData";
import { types } from "@/interface/IHero";

export default async function Page() {
  const getPageCached = useCachedPage("page", "about");
  const data = ((await getPageCached()) as IContentfulInterface[]) ?? [];

  // Destructure for clarity
  const [
    heroData,
    sectionOne,
    sectionTwo,
    roadmapSection,
    gallerySection
  ] = data.map((item) => item?.fields);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title={heroData?.title}
        image={heroData?.image}
        type={types.TWO}
      />

      {/* Content Sections */}
      <Section data={sectionOne as any} type={types.FOUR} imgClassName="lg:h-full xl:h-full xl:bg-contain" />
      <Section data={sectionTwo as any} type={types.FIVE} />

      {/* Roadmap */}
      <Roadmap data={roadmapSection?.sections as any} />

      {/* Gallery */}
      <Gallery data={gallerySection?.images as any} type={types.TWO} />
    </div>
  );
}
