"use client";
import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Team from "./Team";
import ContentSection from "./ContentSection";
import { WordRotate } from "../magicui/word-rotate";
import { processRawImage } from "../../lib/processImage";
import { FieldsInterface } from "@/interface/IContentfulData";
import { types } from "@/interface/IHero";
import { blurPlaceholder } from "./AllGallery";
import Framer from "./Framer";
import { fadeIn } from "@/lib/animation";
import textRender from "../../lib/textRender";
import { cn } from "@/lib/utils";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

interface SectionProps {
  data: FieldsInterface;
  type: types;
  className?: string;
  allowCompression?: boolean,
  imgClassName?: string;
}

export default function Section({
  data,
  type,
  className,
  allowCompression = false,
  imgClassName,
}: SectionProps) {
  const bgStyle = (image: any) => ({
    backgroundImage: `url(${processRawImage(image, allowCompression)})`,
  });

  switch (type) {
    case types.ONE: {
      const sectionItems = data?.subsection?.[0]?.fields?.sections ?? [];
      const firstImage = sectionItems?.[0]; // Remove first item

      return (
        <main
          className=" w-full max-h-[600px] h-screen flex items-center justify-center"
          style={bgStyle(data?.image)}
          aria-label="Section one background"
        >
          <div className="main">
            <Heading
              title={data?.title}
              subtitle={data?.subtitle}
              className="lg:w-[80%] mx-auto pb-5"
            />
            <div className="grid mb-40 relative md:grid-cols-2 py-5 gap-4 lg:gap-30">
              {sectionItems.slice(1, 5).map((res: any, index: number) => (
                <div
                  className="flex items-center mx-auto w-[300px] gap-3"
                  key={index}
                  aria-label={`Feature item ${index + 1}`}
                >
                  <Image
                    src={processRawImage(res?.fields?.image)}
                    alt={"Section image"}
                    width={500}
                    height={500}
                    className="w-[30px] h-[30px] lg:h-[50px] lg:w-[50px]"
                    placeholder="blur"
                    blurDataURL={blurPlaceholder}
                  />
                  {res?.fields?.title}
                </div>
              ))}

              {firstImage && (
                <div className="absolute top-28 md:top-1/2 md:left-1/5 h-[350px] lg:left-1/2 lg:-translate-x-[60%] lg:top-1/2 lg:-translate-y-1/2">
                  <Image
                    src={processRawImage(firstImage?.fields?.image)}
                    alt={firstImage?.fields?.title || "Highlight image"}
                    width={500}
                    height={500}
                    className="h-full object-contain lg:object-cover"
                    placeholder="blur"
                    blurDataURL={blurPlaceholder}
                  />
                </div>
              )}
            </div>
          </div>
        </main>
      );
    }

    case types.TWO:
      return (
        <section className="grid main justify-center md:grid-cols-2 gap-5 lg:gap-10 items-center mx-auto py-4">
          <div className="mx-auto lg:py-5">
            <ContentSection
              title={data?.title}
              text={data?.text}
              className="text-5xl lg:text-8xl text-primary font-bold text-center md:text-left before:lg:w-24 before:lg:h-24 before:lg:-left-10 before:left-3 before:-top-3 before:lg:-top-1"
              bodyClassName="text-sm w-[240px] lg:ml-16 leading-[1.2] text-center text-primary"
            />
          </div>
          <WordRotate
            words={data?.language}
            descriptions={data?.description}
            duration={4000}
            className="text-primary font-medium mx-auto text-3xl text-center md:text-left lg:text-5xl"
          />
        </section>
      );

    case types.THREE:
      return (
        <section className="py-2 main" aria-label="Team section">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-center lg:w-[450px] space-y-5 mx-auto">
              <Team
                title={data?.title}
                subtitle={data?.subtitle}
                headingClassName=""
              />
              <Framer animation={fadeIn("down", 0.6)}>
                <p>{data?.text}</p>
              </Framer>
            </div>
            <div
              className="relative overflow-hidden bg-contain bg-center bg-no-repeat w-full h-[200px] lg:h-[400px]"
              style={bgStyle(data?.image)}
              role="img"
              aria-label="Background illustration"
            ></div>
          </div>
        </section>
      );

    case types.FOUR:
      return (
        <div className="bg-cover" style={{backgroundImage: `url(${processRawImage(data?.backgroundImage, allowCompression)})`}}>
        <section className="py-10 main " aria-label="Content and image section" >
          <div className="main grid gap-10 xl:grid-cols-2  place-items-center ">
            <div className="mx-auto">
              <Heading
                title={data?.title}
                subtitle={data?.subtitle}
                className={className}
                headingClassName={className}
              />
              <Framer animation={fadeIn("down", 0.6)}>
                {data?.text && <p>{data?.text}</p>}
                {data?.fullDescription && (
                  <div className="prose  xl:prose-xl">
                    {textRender(data?.fullDescription)}
                  </div>
                )}
              </Framer>
            </div>
            <div
              className={cn(
                "relative rounded-xl  overflow-hidden h-[200px]  lg:h-[400px] xl:h-[500px] bg-contain bg-center bg-no-repeat w-full",
                imgClassName
              )}
              role="img"
              aria-label="Decorative background"
            >
              <Image
                src={processRawImage(data?.image)}
                alt="Illustration"
                width={500}
                height={500}
                placeholder="blur"
                className="w-full h-full object-cover"
                blurDataURL={blurPlaceholder}
              />
            </div>
          </div>
        </section>
        </div>
      );

    case types.FIVE:
      return (
        <main
          className="bg-cover pb-10"
          style={bgStyle(data?.image)}
          aria-label="Visual background section"
        >
          <div className="main grid xl:grid-cols-2 gap-10 place-items-center place-content-center">
            {data?.image?.[1] && (
              <Image
                src={processRawImage(data?.image?.[1])}
                alt="Illustration"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />
            )}
            <div>
              <Heading
                title={data?.title}
                subtitle={data?.subtitle}
                headingClassName=""
              />
              <Framer animation={fadeIn("down", 0.6)}>
                {data?.text && <p>{data?.text}</p>}
                {data?.fullDescription && (
                  <div className="prose  xl:prose-xl">
                    {textRender(data?.fullDescription)}
                  </div>
                )}
              </Framer>
            </div>
          </div>
        </main>
      );

    case types.SIX:
      return (
        <main
          className="bg-cover py-10"
          aria-label="Visual background section"
        >
          <div className="main grid xl:grid-cols-2 gap-10 place-items-center place-content-center">
            {data?.image?.length > 0 && (
              // <Image
              //   src={processRawImage(data?.image?.[1])}
              //   alt="Illustration"
              //   width={500}
              //   height={500}
              //   placeholder="blur"
              //   blurDataURL={blurPlaceholder}
              //   className="h-[400px] object-cover"
              // />
              <AnimatedTestimonials autoplay testimonials={data.image} />
            )}
            <div>
              <Heading
                title={data?.title}
                subtitle={data?.subtitle}
                headingClassName=""
              />
              <Framer animation={fadeIn("down", 0.6)}>
                {data?.text && <p>{data?.text}</p>}
                {data?.fullDescription && (
                  <div className="prose  xl:prose-xl">
                    {textRender(data?.fullDescription)}
                  </div>
                )}
              </Framer>
            </div>
          </div>
        </main>
      );

    default:
      return (
        <section className="py-10 main" aria-label="Default section">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-center lg:w-[450px] space-y-5 mx-auto">
              <Team
                title={data?.title}
                subtitle={data?.subtitle}
                headingClassName=""
              />
              <Framer animation={fadeIn("down", 0.6)}>
                <p>{data?.text}</p>
              </Framer>
            </div>
            <div
              className="relative overflow-hidden bg-contain bg-center bg-no-repeat w-full h-[200px] lg:h-[600px]"
              style={bgStyle(data?.image)}
              role="img"
              aria-label="Background"
            ></div>
          </div>
        </section>
      );
  }
}
