"use server";

import React from "react";
import { useCachedPage } from "@/hooks/useCachedPage";
import { IContentfulInterface } from "@/interface/IContentfulData";
import Heading from "@/components/shared/Heading";
import Gallery from "@/components/shared/Gallery";
import Section from "@/components/shared/Section";
import Hero from "@/components/shared/hero/Hero";
import { types } from "@/interface/IHero";

export default async function Page() {
  const getPageCached = useCachedPage("page", "home");
  const data = ((await getPageCached()) as IContentfulInterface[]) ?? [];

  const [
    heroData,
    sectionOne,
    headingSection,
    gallerySection,
    sectionTwo,
    sectionThree
  ] = data.map((item) => item?.fields);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title={heroData?.title}
        text={heroData?.text}
        image={heroData?.image}
        type={types.ONE}
        allowCompression={false}
      />

      {/* Section One */}
      <Section data={sectionOne} type={types.TWO} />

      {/* Section Two: Heading & Gallery */}
      <main className="main">
        <Heading
          title={headingSection?.title}
          subtitle={headingSection?.subtitle}
          text={headingSection?.text}
          className="lg:grid-cols-2"
        />
        <Gallery
          data={gallerySection?.sections as any}
          amount={3}
          type={types.ONE}
        />
      </main>

      {/* Section Three & Four */}
      <Section data={sectionTwo as any} type={types.ONE} />
      <Section data={sectionThree as any} type={types.SEVEN} />
    </div>
  );
}
