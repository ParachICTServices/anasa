"use server";
import AllGallery from "@/components/shared/AllGallery";
import Gallery from "@/components/shared/Gallery";
import Hero from "@/components/shared/hero/Hero";
import Section from "@/components/shared/Section";
import { useCachedPage } from "@/hooks/useCachedPage";
import { IContentfulInterface } from "@/interface/IContentfulData";
import { types } from "@/interface/IHero";
import React from "react";

export default async function page() {
  const getPageCached = useCachedPage("page", "anasa-collection");
  const data = ((await getPageCached()) as IContentfulInterface[]) ?? [];

  const [heroData, sectionData, sectionTwo, galleryData] = data.map((item) => item?.fields);


  return (
    <div>
      <Hero
        title={heroData?.title}
        text={heroData?.text}
        images={heroData?.images}
        image={heroData?.image}
        type={types.FOUR}
        bodyClassName=" !bg-[#030303]"
        className=" text-white"
      />
      <Section data={sectionData} type={types.SIX}/>
      <Section data={sectionTwo} type={types.FOUR} className="mx-0"/>
      <AllGallery className="bg-black text-white" data={galleryData?.images} headingData={galleryData} />
    </div>
  );
}
