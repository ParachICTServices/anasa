"use server";
import { useCachedSection } from "@/hooks/useCachedPage";
import { IContentfulInterface } from "@/interface/IContentfulData";
import React from "react";
import { processRawImage } from "@/lib/processImage";
import Heading from "./Heading";
import { types } from "@/interface/IHero";
import { Button } from "../ui/button";
import Link from "next/link";
import { BiLogoFacebookSquare } from "react-icons/bi";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import Whatsapp from "./Whatsapp";

export default async function Footer() {
  const getPageCached = useCachedSection("footer", "footer");
  const data = ((await getPageCached()) as IContentfulInterface[]) ?? [];
  const date = new Date().getFullYear();
  const [sectionData] = data.map((item) => item.fields);
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Furniture & Joinery",
      path: "/furniture-and-joinery",
    },
    {
      name: "Design & Project Management",
      path: "/design-and-project-management",
    },
    {
      name: "The ANASA Collection",
      path: "/anasa-collection",
    },
    {
      name: "The MOSAIC Studio",
      path: "/mosaic-studio",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
  ];

  const getPlatformInfo = (url: string) => {
    if (url.includes("facebook.com")) {
      return {
        icon: <FaLinkedin className=" text-white" size={22} />,
        name: "Facebook",
        link: url,
        color: "#1877F2",
      };
    }

    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return {
        icon: <FaYoutube className=" text-white" size={22} />,
        name: "YouTube",
        link: url,
        color: "#FF0000",
      };
    }
    if (url.includes("instagram.com")) {
      return {
        icon: <RiInstagramFill className=" text-white" size={22} />,
        name: "Instagram",
        link: url,
        color: "#E4405F",
      };
    }
    if (url.includes("tiktok.com")) {
      return {
        icon: <AiFillTikTok className=" text-white" size={22} />,
        name: "TikTok",
        link: url,
        color: "#000000",
      };
    }
    return;
  };

  return (
    <footer className="w-full">
      <div
        className=" w-full lg:h-[400px] overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${processRawImage(
            sectionData?.backgroundImage,
            false
          )})`,
        }}
      >
        <div className="main h-full grid lg:grid-cols-[5fr_7fr]">
          <div
            className=" h-[140px] md:h-full  w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${processRawImage(sectionData?.image)})`,
            }}
          ></div>

          <div className="">
            <Heading
              title={sectionData?.title}
              subtitle={sectionData?.subtitle}
              className=" text-white my-4 mb-10 lg:pl-14"
              headingClassName="text-white before:bg-primary"
              type={types.ONE}
            />
            <div className="bg-primary flex flex-col justify-center  md:flex-row items-center  w-full gap-4 p-10 rounded-t-xl md:rounded-t-none">
              <Button
                variant="secondary"
                className="rounded-full bg-black text-white h-[40px] text-lg px-5"
              >
                Contact Us
              </Button>
              <Image
                src={processRawImage(sectionData?.logo)}
                alt=""
                width={400}
                height={400}
                className="h-[140px] w-[140px] object-cover lg:ml-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-10 lg:h-[500px] flex justify-center flex-col gap-5 items-center w-full">
        <div className="main py-10 lg:h-[380px] border-b flex items-center justify-center">
          <div className="grid  md:grid-cols-2 lg:grid-cols-[6fr_4fr_3fr]">
            <h2 className="text-white font-bold lg:text-5xl">
              {sectionData?.bottomText}
            </h2>
            <div className="space-y-4 pt-10 md:pt-0">
              <h4 className=" font-bold text-white">Connect With Us</h4>
              <div className="flex gap-2 flex-wrap">
                {routes?.map((item, index) => (
                  <Link
                    href={item?.path}
                    key={index}
                    className="p-2 px-4 bg-[#2B6843] text-white rounded-full"
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-10 md:pt-0">
              <h4 className=" font-bold lg:text-right text-white">
                Our Contact
              </h4>
              <div className=" gap-2 flex flex-col lg:items-end text-white">
                {sectionData?.contactDetails?.map(
                  (item: string, index: number) => (
                    <p className="text-white lg:text-right" key={index}>
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="main md:flex  md:flex-row items-center justify-between">
          <div className="grid md:flex items-center gap-3 lg:gap-5 text-white">
            <p className="text-white uppercase">&copy; {date} Anasa </p>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Use</Link>
          </div>
          <div className="flex items-center py-5 gap-3">
            {sectionData?.socials?.map((res, index) => {
              const platformInfo = getPlatformInfo(res);
              return (
                <a href={platformInfo?.link} target="_blank" referrerPolicy="no-referrer" className="" key={index}>
                  {platformInfo?.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Whatsapp phoneNumber={sectionData?.contactDetails?.[2]} />
    </footer>
  );
}
