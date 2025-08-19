"use client";

import React from "react";
import Image from "next/image";
import { IHero, types } from "@/interface/IHero";
import { processRawImage } from "@/lib/processImage";
import { fadeIn, slideUp } from "@/lib/animation";
import Framer from "../Framer";
import { cn } from "@/lib/utils";
import { blurPlaceholder } from "../AllGallery";
import { SpinningText } from "@/components/magicui/spinning-text";

export default function Hero({
  title,
  image,
  text,
  images,
  type,
  logo,
  logoImg,
  allowCompression,
  className,
  bodyClassName,
}: IHero) {
  const renderTitle = (
    animationDelay = 0.2,
    type = 5,
    textClass = "text-primary"
  ) => (
    <Framer animation={slideUp(animationDelay)}>
      {title?.split(" ").map((word, index) =>
        index === type ? (
          <span key={index} className={cn(textClass)}>
            {word}
          </span>
        ) : (
          word + " "
        )
      )}
    </Framer>
  );

  switch (type) {
    // ======== Type ONE ========
    case types.ONE:
      return (
        <div
          className="w-full h-full min-h-[90vh] lg:min-h-[110vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${processRawImage(image, allowCompression)})`,
          }}
        >
          <h1 className="text-center lg:pb-70 w-[80%] md:w-[60%] 2xl:text-[90px] lg:w-2/4">
            {renderTitle(0.5)}
          </h1>
        </div>
      );

    // ======== Type TWO ========
    case types.TWO:
      return (
        <div
          className="pt-30 bg-white w-full bg-cover h-full"
          style={{
            backgroundImage: `url(${processRawImage(image?.[2], false)})`,
          }}
        >
          <div className="main relative py-10">
            <h1 className="pb-10">{renderTitle(0.6)}</h1>

            <Framer animation={fadeIn("top", 0.4)}>
              <div className="clipped_shape">
                <Image
                  width={500}
                  height={500}
                  src={processRawImage(image, allowCompression)}
                  alt="Hero background shape"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>

              <Image
                width={500}
                height={500}
                src={processRawImage(image?.[1], false)}
                alt="Floating decorative element"
                className="h-[120px] lg:h-[180px] w-[120px] md:w-[200px] lg:w-[400px] object-contain absolute top-10 right-4 z-10 perspective-1000 rotate-z-3 duration-500 ease-in-out"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />

              <div className="w-[140px] h-[40px] md:w-[200px] md:h-[50px] lg:w-[350px] lg:h-[80px] bg-[#F1F6F3] rounded-full absolute top-20 right-0 lg:right-14 z-0" />
            </Framer>
          </div>
        </div>
      );

    case types.THREE:
      return (
        <div
          className={cn("pt-30 bg-white w-full bg-cover h-full", bodyClassName)}
          style={{
            backgroundImage: `url(${processRawImage(image?.[1], false)})`,
          }}
        >
          <div className="main relative py-10">
            <h1 className={cn("pb-10", className)}>{renderTitle(0.5)}</h1>
            {logo &&  
            <Image src={processRawImage(image?.[2], allowCompression)} height={120} width={120} className=" absolute h-[80px] object-contain top-0 left-0 lg:h-[120px] rounded-xl" alt="logo"/>
            }
            <Framer animation={fadeIn("up", 0.7)}>
              <div className="clipped_shape_two scale-x-[-1] rotate-[0.3deg]">
                <Image
                  width={500}
                  height={500}
                  src={processRawImage(image, false)}
                  alt="Hero default shape"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>
            </Framer>
          </div>
        </div>
      );

    // ======= Type Four ========
    case types.FOUR:
      return (
        <div
          className={cn(
            "pt-30 bg-white w-full max-h-[1100px] h-full bg-cover",
            bodyClassName
          )}
          style={{
            backgroundImage: `url(${processRawImage(image)})`,
          }}
        >
          <div className="main relative py-10">
            <h1
              className={cn(
                "absolute text-center top-[10%] md:top-26 lg:text-7xl left-[50%] z-30 -translate-x-1/2 font-bold lg:w-[70%] md:w-[90%] w-full md:text-right",
                className
              )}
            >
              {renderTitle(0.5, 7, "text-green-500")}
            </h1>

            <div className="flex items-center justify-between gap-10">
              <div className="relative lg:h-[500px] lg:w-[400px] -mt-40 z-0">
                <div className="absolute inset-0 bg-black/50 z-10 rounded-xl"></div>
                <Image
                  src={processRawImage(images?.[0])}
                  alt="anasa-image"
                  className="h-full w-full object-cover rounded-xl"
                  width={500}
                  height={500}
                />
              </div>
              <div className="relative lg:h-[500px] lg:w-[400px] mt-30 z-0">
                <div className="absolute inset-0 bg-black/50 z-10 rounded-xl"></div>
                <Image
                  src={processRawImage(images?.[1])}
                  alt="anasa-image"
                  className="h-full w-full object-cover rounded-xl"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            {/* <div className=" absolute top-1/2 left-1/2 w-[100px] h-[100px]">
                <SpinningText className="absolute top-0 left-0 text-white">
                * Anasa Collection 
                </SpinningText>
                <h2 className=" absolute -top-8 -left-[30px] text-white bg-primary w-[60px] h-[60px] text-center flex  items-center justify-center rounded-full">A</h2>
            </div> */}
            <h3 className="h-[140px] text-center md:text-left pt-20 flex items-center font-light justify-center text-white mx-auto lg:text-4xl lg:w-[70%]">
              {text}
            </h3>
          </div>
        </div>
      );

    // ======== Default (Fallback) ========
    default:
      return (
        <div
          className="pt-30 bg-white w-full bg-cover h-full"
          style={{
            backgroundImage: `url(${processRawImage(image?.[1])})`,
          }}
        >
          <div className="main relative py-10">
            <h1 className={cn("pb-10", className)}>{renderTitle(0.6)}</h1>
            <Framer animation={fadeIn("up", 0.7)}>
              <div className="clipped_shape_two rotate-[0.3deg]">
                <Image
                  width={500}
                  height={500}
                  src={processRawImage(image)}
                  alt="Hero default shape"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>
            </Framer>
          </div>
        </div>
      );
  }
}
