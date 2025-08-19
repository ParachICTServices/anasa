"use client";
import React, { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IContentfulInterface } from "@/interface/IContentfulData";
import { processRawImage } from "@/lib/processImage";
import Framer from "./Framer";
import { fadeIn, fadeInLetters, slideUp } from "@/lib/animation";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { types } from "@/interface/IHero";
import Heading from "./Heading";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import { blurPlaceholder } from "./AllGallery";

export default function Gallery({
  data,
  amount,
  showTab,
  title = 'Some of our Projects',
  type,
  textClassName,
}: {
  data: IContentfulInterface[];
  amount?: number;
  showTab?: boolean;
  title?: string,
  textClassName?: string,

  type: types;
}) {
  const router = useRouter();

  // Memoize filtered data so it doesn't re-compute unnecessarily

  if (type === types.ONE) {
    const [selected, setSelected] = useState(data?.[0]?.fields?.section || "");

    const filteredData = useMemo(
      () => data?.find((item) => item?.fields?.section === selected),
      [data, selected]
    );
    return (
      <div className="h-full">
        <Tabs value={selected} onValueChange={setSelected} className="w-full">
          {showTab && (
            <div className="grid lg:grid-cols-2">
              <TabsList className="flex flex-wrap gap-2 justify-center sm:justify-start mb-10 lg:mb-0">
                {data?.map((item, index) => (
                  <Framer animation={fadeInLetters(index + 3)} key={index}>
                    <TabsTrigger
                      key={item?.fields?.section}
                      value={item?.fields?.section as string}
                      className="capitalize"
                    >
                      {item?.fields?.section?.split("-").join(" ")}
                    </TabsTrigger>
                  </Framer>
                ))}
              </TabsList>
              <Framer animation={fadeIn("up", 0.4)}>
                <Button
                  onClick={() => router.push("/about")}
                  className="hidden lg:flex h-[40px] py-3 w-fit rounded-full"
                >
                  Learn More
                </Button>
              </Framer>
            </div>
          )}
          <PhotoProvider key={selected} maskOpacity={0.8}>
            <TabsContent value={selected} className="h-full">
              <div className="grid md:grid-cols-2 lg:grid-cols-[5fr_3fr_3fr] py-4 lg:h-[430px] object-cover gap-3">
                {filteredData?.fields?.images
                  ?.slice(0, amount)
                  ?.map((item, index) => (
                    <Framer
                      className=" rounded-xl"
                      key={index}
                      animation={fadeInLetters(index + 4)}
                    >
                      {/* <HeroVideoDialog
                        key={index}
                        animationStyle="top-in-bottom-out"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc={processRawImage(item)}
                        thumbnailAlt="Hero Video"
                      /> */}
                      <PhotoView src={processRawImage(item)}>
                        <Image
                          width={500}
                          height={500}
                          className="h-[400px] cursor-pointer rounded-xl w-full object-cover"
                          src={processRawImage(item)}
                          alt=""
                          placeholder="blur"
                          blurDataURL={blurPlaceholder}
                        />
                      </PhotoView>
                    </Framer>
                  ))}
              </div>
            </TabsContent>
          </PhotoProvider>
        </Tabs>
      </div>
    );
  }

  if (type === types.TWO) {
    return (
      <div className="h-full relative max-w-screen main py-10">
        <Heading
          title={title}
          textClassName={textClassName}
          subtitle="Projects"
          className="mb-10 flex items-center justify-center"
        />
        <PhotoProvider maskOpacity={0.8}>
          <div className=" columns-1 md:columns-2 lg:columns-3 ">
            {data?.slice(0, amount)?.map((item, index) => (
              <Framer
                className="h-[350px] mb-4 rounded-xl"
                key={index}
                animation={fadeInLetters(index + 4)}
              >
                <PhotoView src={processRawImage(item)}>
                  <Image
                    width={500}
                    height={500}
                    className="h-[400px] cursor-pointer rounded-xl w-full object-cover"
                    src={processRawImage(item)}
                    alt=""
                    placeholder="blur"
                    blurDataURL={blurPlaceholder}
                  />
                </PhotoView>
              </Framer>
            ))}
          </div>
        </PhotoProvider>
        <div className="absolute -left-50 opacity-4 top-0 lg:w-[1500px] font-black text-white lg:text-[170px]">
          MOSAIC STUDIO
        </div>
      </div>
    );
  }

  return <div className="h-full"></div>;
}
