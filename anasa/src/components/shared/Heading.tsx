"use client";

import { IContent } from "@/interface/IContent";
import { cn } from "@/lib/utils";
import React from "react";
import Framer from "./Framer";
import { fadeIn, slideUp } from "@/lib/animation";
import { types } from "@/interface/IHero";

export default function Heading({
  title,
  subtitle,
  className,
  headingClassName,
  textClassName,
  text,
  type,
}: IContent) {
  if (type === types.ONE) {
    return (
      <div className={cn("py-4 grid gap-4 lg:pt-10", className)}>
        <div
          className={cn(
            "w-[300px] mx-auto lg:mx-0 lg:w-[450px] text-left ",
            headingClassName
          )}
        >
          <Framer animation={slideUp(0.9)}>
            <h4 className={cn("text-primary tracking-[4px] font-bold pb-3")}>
              {subtitle}
            </h4>
          </Framer>
          <Framer animation={fadeIn("down", 0.6)} className=" overflow-visible">
            {title && (
              <h3
                className={cn(
                  "relative before:absolute text-left uppercase before:h-15 before:w-15 before:bg-[#A0CD9E] before:-top-2 before:-left-8 before:z-0",
                  headingClassName
                )}
              >
                <Framer animation={slideUp(0.9)} className="relative z-10">
                  {title}
                </Framer>
              </h3>
            )}
          </Framer>
        </div>
        {text && (
          <div className=" text-left ">
            <Framer animation={fadeIn("top", 0.5)}>
              <p>{text}</p>
            </Framer>
          </div>
        )}
      </div>
    );
  }
  if (type === types.TWO) {
    return (
      <div className="w-[300px] text-center mx-auto lg:mx-0 lg:w-[450px] ">
        <Framer animation={slideUp(0.9)}>
          <h4
            className={cn(
              "text-primary text-center tracking-[4px] font-bold pb-3",
              className
            )}
          >
            {subtitle}
          </h4>
        </Framer>
        <h3
          className={cn(
            "relative before:absolute text-center uppercase before:h-15 before:w-15 before:bg-[#A0CD9E] before:-top-2 before:left-14 before:z-0"
          )}
        >
          <Framer animation={slideUp(0.3)} className="relative z-10">
            {title}
          </Framer>
        </h3>
      </div>
    );
  }
  if (type === types.THREE) {
    return (
      <div
        className={cn(
          "py-4 w-[300px] lg:w-[450px] flex items-center gap-4 lg:pt-10",
          className
        )}
      >
        <div className={cn(headingClassName)}>
          {subtitle && (
            <Framer
              animation={fadeIn("down", 0.6)}
              className=" overflow-visible"
            >
              <h2
                className={cn(
                  "relative before:absolute text-left uppercase before:h-14 before:w-14 before:lg:h-18 before:lg:w-18 font-black before:bg-[#A0CD9E] before:top-5 before:lg:top-10 before:-left-2 before:z-0 text-5xl lg:text-8xl"
                )}
              >
                <Framer animation={slideUp(0.9)} className="relative z-10">
                  {subtitle}
                </Framer>
              </h2>
            </Framer>
          )}
        </div>
        {text && (
          <div className=" ">
            <Framer animation={slideUp(0.9)}>
              <h2 className=" font-light lg:pb-3">{title}</h2>
            </Framer>
            <Framer animation={fadeIn("top", 0.5)}>
              <p className="prose lg:prose-lg">{text}</p>
            </Framer>
          </div>
        )}
      </div>
    );
  }
  if (type === types.FOUR) {
    return (
      <div className={cn("py-4 grid gap-4 lg:pt-10")}>
        <div
          className={cn("w-fit mx-auto lg:mx-0  text-left ", headingClassName)}
        >
          <Framer animation={slideUp(0.9)}>
            <h4 className="text-primary tracking-[4px] font-bold pb-3">
              {subtitle}
            </h4>
          </Framer>
          {title && (
            <Framer
              animation={fadeIn("down", 0.6)}
              className=" overflow-visible"
            >
              <h3
                className={cn(
                  "relative before:absolute text-left uppercase before:h-15 before:w-15 before:bg-primary before:-top-2 before:-left-8 before:z-0"
                )}
              >
                <Framer animation={slideUp(0.9)} className="text-white text-4xl relative z-10">
                  {title}
                </Framer>
              </h3>
            </Framer>
          )}
        </div>
        {text && (
          <div className=" text-left ">
            <Framer animation={fadeIn("top", 0.5)}>
              <p>{text}</p>
            </Framer>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={cn("py-4 grid gap-4 lg:pt-10", className)}>
      <div
        className={cn("w-fit mx-auto lg:mx-0  text-left ", headingClassName)}
      >
        <Framer animation={slideUp(0.9)}>
          <h4 className={cn("text-primary tracking-[4px] font-bold pb-3", )}>
            {subtitle}
          </h4>
        </Framer>
        
         {title && <Framer animation={fadeIn("down", 0.6)} className=" overflow-visible">
            <h3
              className={cn(
                "relative before:absolute text-left uppercase before:h-15 before:w-15 before:bg-[#A0CD9E] before:-top-2 before:-left-8 before:z-0", textClassName
              )}
            >
              <Framer animation={slideUp(0.9)} className="relative z-10">
                {title}
              </Framer>
            </h3>
          </Framer>}
      </div>
      {text && (
        <div className=" text-left ">
          <Framer animation={fadeIn("top", 0.5)}>
            <p>{text}</p>
          </Framer>
        </div>
      )}
    </div>
  );
}
