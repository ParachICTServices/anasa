"use server";

import Gallery from "@/components/shared/Gallery";
import Hero from "@/components/shared/hero/Hero";
import Section from "@/components/shared/Section";
import { useCachedPage } from "@/hooks/useCachedPage";
import { IContentfulInterface } from "@/interface/IContentfulData";
import { types } from "@/interface/IHero";
import React from "react";

export default async function page() {
  const getPageCached = useCachedPage("page", "construction");
  const data = ((await getPageCached()) as IContentfulInterface[]) ?? [];

    const [
    heroData,
    sectionData,
    gallerySection
  ] = data.map((item) => item?.fields);


  return (
    <div className="">
      <Hero
        image={heroData?.image}
        title={heroData?.title}
        className=" lg:w-[40%] ml-auto lg:text-right lg:absolute right-0 z-10 top-5 lg:text-5xl"
      />
      <Section data={sectionData as any} type={types.FOUR} />
      <Gallery data={gallerySection?.images as any} type={types.TWO} />
    </div>
  );
}
