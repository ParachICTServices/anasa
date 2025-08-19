"use client";
import { IHero } from "@/interface/IHero";
import { processRawImage } from "@/lib/processImage";
import React from "react";
import Framer from "../Framer";
import { fadeIn, slideUp } from "@/lib/animation";
import Image from "next/image";
import { blurPlaceholder } from "../AllGallery";

export default function GalleryHero({
  title,
  image,
  images,
  description,
}: IHero) {
  return (
    <div
      className="min-h-screen w-full pt-[140px] pb-10"
      style={{
        backgroundImage: `url(${processRawImage(image)})`,
      }}
    >
      <div className="main">
        <div className=" flex flex-col md:items-center md:flex-row justify-between gap-5 pb-10">
          <h1 className="text-white text-5xl md:text-[80px] lg:w-[450px]">
            {
              <Framer animation={slideUp(0.3)}>
                {title?.split(" ").map((word, index) =>
                  index === 2 ? (
                    <span key={index} className="text-[#3EB66D] font-bold">
                      {word}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </Framer>
            }
          </h1>
          <Framer animation={fadeIn("down", 0.6)}>
            <p className="text-white lg:text-xl font-light w-[250px] md:text-right">
              {description?.split(" ").map((word: string, index: number) =>
                index === 17 || index == 18 ? (
                  <span
                    key={index}
                    className="text-[#3EB66D] px-[2px] font-bold"
                  >
                    {word}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </p>
          </Framer>
        </div>
        <div className=" grid lg:grid-cols-3 gap-3">
          <Framer animation={fadeIn("left", 0.6)}>
            <Image
              src={processRawImage(images?.[0])}
              alt=""
              width={500}
              height={500}
              className="h-[200px] lg:h-[400px] w-full object-cover rounded-xl"
              placeholder="blur"
              blurDataURL={blurPlaceholder}
            />
          </Framer>
          <Framer animation={fadeIn("up", 0.8)}>
            <Image
              src={processRawImage(images?.[1])}
              alt=""
              width={500}
              height={500}
              className="h-[200px] lg:h-[400px] w-full object-cover rounded-xl"
              placeholder="blur"
              blurDataURL={blurPlaceholder}
            />
          </Framer>

          <div className="w-full h-full grid gap-3">
            <Framer animation={fadeIn("left", 0.8)}>
              <Image
                src={processRawImage(images?.[2])}
                alt=""
                width={500}
                height={500}
                className="h-[190px] w-full object-cover rounded-xl"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />
            </Framer>
            <Framer animation={fadeIn("bottom", 0.8)}>
              <Image
                src={processRawImage(images?.[3])}
                alt=""
                width={500}
                height={500}
                className="h-[190px] w-full object-cover rounded-xl"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />
            </Framer>
          </div>
        </div>
      </div>
    </div>
  );
}
