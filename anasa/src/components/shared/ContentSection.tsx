"use client";
import { IContent } from "@/interface/IContent";
import { cn } from "@/lib/utils";
import React from "react";
import Framer from "./Framer";
import { slideUp } from "@/lib/animation";

export default function ContentSection({
  text,
  className,
  bodyClassName,
  title,
  children,
}: IContent) {
  return (
    <div className="py-4 lg:py-10">
      <div className=" relative">
        <h2
          className={cn(
            " before:absolute text-center md:text-left uppercase before:h-15 before:w-15 before:bg-[#A0CD9E] before:-top-2 before:-left-8 before:-z-10",
            className
          )}
        >
          <Framer animation={slideUp(0.3)}>{title}</Framer>
        </h2>
        <Framer animation={slideUp(0.9)}>
          <p className={cn(bodyClassName)}>{text}</p>
        </Framer>
      </div>
      {children}
    </div>
  );
}
