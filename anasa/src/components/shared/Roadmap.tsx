"use client";
import {
  FieldsInterface,
  IContentfulInterface,
} from "@/interface/IContentfulData";
import { processImage, processRawImage } from "@/lib/processImage";
import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import { cn } from "../../lib/utils";
import { types } from "@/interface/IHero";
import Framer from "./Framer";
import { fadeInLetters } from "@/lib/animation";
import { blurPlaceholder } from "./AllGallery";

export default function Roadmap({ data }: { data: IContentfulInterface[] }) {
  const backgroundImage = data?.[0]?.fields?.backgroundImage;
  return (
    <div className=" ">
        <Heading
        title="OUR PROJECT ROADMAP"
        subtitle="Roadmap"
        className="mx-auto flex items-center justify-center py-10"
        />
      {data?.map((item, index) => (
        <main key={index} className={cn(" py-4 bg-cover bg-bottom  lg:py-10", index % 2 !== 0 && "bg-green-500/6 mix-blend-multiply")} style={{
            backgroundImage: `url(${index % 2 !== 0 && processRawImage(backgroundImage)})`
        }}>
          <div className="main">
            <div
              className={cn(
                "flex items-center flex-col-reverse lg:flex-row-reverse justify-between gap-6",
                index % 2 === 0 && " lg:flex-row"
              )}
            >
              {/* Images section */}
              <div
                className={cn(
                  "grid items-center w-full h-full justify-between gap-3 md:grid-cols-2 lg:grid-cols-[8fr_4fr]"
                )}
              >
                {item?.fields?.image?.map(
                  (res: IContentfulInterface, i: number) => (
                    <Framer
                      className="w-full"
                      animation={fadeInLetters(i + 3)}
                      key={i}
                    >
                      <Image
                        src={processImage(res?.fields?.file?.url)}
                        alt=""
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL={blurPlaceholder}
                        className="w-[400px] lg:w-full h-[300px] object-cover rounded-xl"
                      />
                    </Framer>
                  )
                )}
              </div>

              {/* Text section */}
              <div className="">
                <Heading
                  type={types.THREE}
                  subtitle={`0${index + 1}`}
                  title={item?.fields?.title}
                  text={item?.fields?.text}
                />
              </div>
            </div>
          </div>
        </main>
      ))}
    </div>
  );
}
