"use client";

import { FieldsInterface } from "@/interface/IContentfulData";
import { processRawImage } from "@/lib/processImage";
import Image from "next/image";
import React from "react";
import { blurPlaceholder } from "./AllGallery";
import Heading from "./Heading";
import { cn } from "@/lib/utils";
import Framer from "./Framer";
import { fadeIn } from "@/lib/animation";
import textRender from "@/lib/textRender";

export default function MosaicComponent({
  data,
  className,
}: {
  data: FieldsInterface;
  className?: string;
}) {
  return (
    <main
      className="bg-cover lg:min-h-[55vh] pb-10"
      style={{
        backgroundImage: `url(${processRawImage(data?.backgroundImage)})`,
      }}
      aria-label="Visual background section"
    >
      <div
        className={cn(
          "main flex py-10 flex-col gap-4 lg:flex-row items-center justify-between"
        )}
      >
        {data?.image && (
          <Framer animation={fadeIn("down", 0.6)}>
            <Image
              src={processRawImage(data?.image)}
              alt="Illustration"
              width={500}
              height={500}
              className="rounded-2xl h-[400px] object-cover object-right prose-p"
              placeholder="blur"
              blurDataURL={blurPlaceholder}
            />
          </Framer>
        )}
        <div>
          <Heading
            title={data?.title}
            subtitle={data?.subtitle}
            textClassName=" !text-white before:!bg-primary"
          />
          <Framer animation={fadeIn("down", 0.6)}>
            {data?.text && <p className="text-gray-50 font-light">{data?.text}</p>}
            {data?.fullDescription && (
              <div className="prose !text-white !prose-white xl:prose-xl">
                {textRender(data?.fullDescription)}
              </div>
            )}
          </Framer>
        </div>
      </div>
    </main>
  );
}
