"use client";
import Image from "next/image";
import React from "react";
import Framer from "./Framer";
import { fadeIn } from "@/lib/animation";

export default function MosaicSection() {
  return (
    <div className="main py-10 relative flex items-center justify-center lg:min-h-[50vh]">
      <div className=" font-bold">
        <Framer animation={fadeIn("up", 0.4)}>
          <div className="flex items-center gap-3 justify-center">
          <h1 className="text-white lg:text-8xl">The MOSAIC</h1>
          <h1 className=" text-primary lg:text-8xl mr-20">Studio</h1>
          </div>
        </Framer>
       
      </div>
      <Image
        src="/image/shape.svg"
        alt=""
        width={500}
        height={500}
        className="h-[100px] lg:h-[180px] w-full absolute lg:top-20 lg:left-10"
      />
    </div>
  );
}
