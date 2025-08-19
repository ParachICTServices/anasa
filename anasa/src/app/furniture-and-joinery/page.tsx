"use server";
import Gallery from "@/components/shared/Gallery";
import Hero from "@/components/shared/hero/Hero";
import Section from "@/components/shared/Section";
import { useCachedPage } from "@/hooks/useCachedPage";
import { IContentfulInterface } from "@/interface/IContentfulData";
import { types } from "@/interface/IHero";
import React from "react";

export default async function page() {
  const getPageCached = useCachedPage("page", "furniture");
  const data = ((await getPageCached()) as IContentfulInterface[]) ?? [];

  const [heroData, sectionData, gallerySection] = data.map(
    (item) => item?.fields
  );

  return (
    <div className="">
      <Hero
        image={heroData?.image}
        title={heroData?.title}
        className=" lg:w-[40%] mr-auto lg:text-left lg:absolute left-4 z-10 top-10 lg:text-5xl"
        type={types.THREE}
      />{" "}
      <Section data={sectionData as any} type={types.FOUR} />
      <Gallery  data={gallerySection?.images as any} type={types.TWO} />
    </div>
  );
}
