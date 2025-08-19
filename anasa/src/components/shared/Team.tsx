"use client";
import React from "react";
import Framer from "./Framer";
import { slideUp } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { IContent } from "@/interface/IContent";

export default function Team({ subtitle, title }: IContent) {
  return (
    <div>
      <div className="w-[300px] text-center mx-auto lg:mx-0 lg:w-[450px] ">
        <Framer animation={slideUp(0.9)}>
          <h4 className="text-primary text-center tracking-[4px] font-bold pb-3">
            {subtitle}
          </h4>
        </Framer>
        <h3
          className={cn(
            "relative before:absolute text-center uppercase before:h-15 before:w-15 before:bg-[#A0CD9E] before:-top-2 before:left-6 before:lg:-left-4 before:z-0"
          )}
        >
          <Framer animation={slideUp(0.3)} className="relative z-10">
            {title}
          </Framer>
        </h3>
      </div>
    </div>
  );
}
