"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FieldsInterface, FileData } from "@/interface/IContentfulData";
import Image from "next/image";
import { processRawImage } from "../../lib/processImage";
import Heading from "./Heading";
import { types } from "@/interface/IHero";
import Framer from "./Framer";
import { fadeInLetters } from "@/lib/animation";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 9;
export const blurPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=";

export default function AllGallery({
  data,
  headingData,
  className
}: {
  data: any;
  className?: string,
  headingData: FieldsInterface;
}) {
  const [page, setPage] = useState<number>(1);
  const totalPages = Math.ceil(data?.length / ITEMS_PER_PAGE);
  const currentPageData = data?.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const scrollIntoView = () => {
    const el = document.getElementById("mainData");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={cn("py-10", className)}>
      <div className="main" id="mainData">
        <div className="">
          <Heading
            title={headingData?.title}
            subtitle={headingData?.subtitle}
            type={types.FOUR}
            className=" flex items-center justify-center"
          />
          <PhotoProvider key={page} maskOpacity={0.8}>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
              {currentPageData?.map((item: FileData, index: number) => (
                <Framer animation={fadeInLetters(index + 2)} key={index}>
                  <PhotoView src={processRawImage(item)}>
                    <Image
                      width={500}
                      height={500}
                      className="h-[300px] cursor-pointer rounded-xl w-full object-cover"
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
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="my-10 mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => {
                      setPage((p) => Math.max(1, p - 1));
                      scrollIntoView();
                    }}
                    className={
                      page === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                {page > 1 && (
                  <PaginationItem className=" text-sm">
                    <PaginationLink
                      onClick={() => {
                        setPage(page - 1);
                        scrollIntoView();
                      }}
                    >
                      {page - 1}
                    </PaginationLink>
                  </PaginationItem>
                )}
                <PaginationItem className="px-4 text-sm">
                  <PaginationLink isActive className="text-black">
                    {page}
                  </PaginationLink>
                </PaginationItem>
                {totalPages !== page && (
                  <PaginationItem className=" text-sm">
                    <PaginationLink
                      onClick={() => {
                        setPage(page + 1);
                        scrollIntoView();
                      }}
                    >
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}
                {page == 1 && totalPages > 2 && (
                  <PaginationItem className=" text-sm">
                    <PaginationLink
                      onClick={() => {
                        setPage(page + 2);
                        scrollIntoView();
                      }}
                    >
                      {page + 2}
                    </PaginationLink>
                  </PaginationItem>
                )}
                {totalPages !== page && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => {
                      setPage((p) => Math.min(totalPages, p + 1));
                      scrollIntoView();
                    }}
                    className={
                      page === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
