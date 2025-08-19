"use server";
import AllGallery from "@/components/shared/AllGallery";
import Gallery from "@/components/shared/Gallery";
import Heading from "@/components/shared/Heading";
import GalleryHero from "@/components/shared/hero/GalleryHero";
import Section from "@/components/shared/Section";
import { useCachedPage } from "@/hooks/useCachedPage";
import { IContentfulInterface } from "@/interface/IContentfulData";
import { types } from "@/interface/IHero";
import React from "react";

export default async function page() {
  const getPageCached = useCachedPage("page", "gallery");
  const data = ((await getPageCached()) as IContentfulInterface[]) ?? [];

  const [heroData, headingData, gallery] = data.map((item) => item?.fields);

  return (
    <div className="bg-[#030303] text-white">
      <GalleryHero
        image={heroData?.image}
        title={heroData?.title}
        description={heroData?.description}
        images={heroData?.images}
      />
      <AllGallery data={gallery?.images} headingData={headingData} />
    </div>
  );
}
