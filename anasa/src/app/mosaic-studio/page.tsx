"use server";

import AllGallery from "@/components/shared/AllGallery";
import Gallery from "@/components/shared/Gallery";
import Hero from "@/components/shared/hero/Hero";
import MosaicComponent from "@/components/shared/MosaicComponent";
import MosaicSection from "@/components/shared/MosaicSection";
import Section from "@/components/shared/Section";
import { useCachedPage } from "@/hooks/useCachedPage";
import { IContentfulInterface } from "@/interface/IContentfulData";
import { types } from "@/interface/IHero";
import React from "react";

export default async function page() {
  const getPageCached = useCachedPage("page", "mosaic");
  const data = ((await getPageCached()) as IContentfulInterface[]) ?? [];

  const [heroData, sectionOne, gallerySection, sectionTwo] = data.map(
    (item) => item?.fields
  );

  return (
    <div className="bg-[#030303] text-white">
      <Hero
        image={heroData?.image}
        title={""}
        className=" lg:w-[40%] mr-auto lg:text-left lg:absolute left-4 z-10 top-10 lg:text-5xl"
        bodyClassName=" !bg-[#030303]"
        type={types.THREE}
        logo
        logoImg={''}
      />
      <MosaicSection />
      <MosaicComponent data={sectionOne}  />
      <Gallery
        data={gallerySection?.images as IContentfulInterface[]}
        amount={6}
        title="SOME OF OUR ARTISTS WORKS"
        type={types.TWO}
        textClassName=" !text-white"
      />
      <MosaicComponent data={sectionTwo} />
    </div>
  );
}
