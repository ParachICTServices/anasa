"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Framer from "./Framer";
import { fadeInLetters, slideUp } from "@/lib/animation";
import { PopoverClose } from "@radix-ui/react-popover";
import Hamburger from "hamburger-react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const closeMenu = () => {
    setMenu(false);
  };
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
      name: "Services",
      path: "#",
      type: "modal",
      links: [
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
      ],
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    // Run immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "h-20 fixed top-0 left-0 w-full bg-transparent z-50 ",
        open &&
          " transition-all duration-300 bg-white shadow-2xl shadow-gray-300/20",
        open &&
          (pathname == "/gallery" ||
            pathname == "/mosaic-studio" ||
            pathname == "/anasa-collection") &&
          "bg-[#030303] shadow-gray-600/20"
      )}
    >
      <div className="main h-full flex items-center justify-between">
        <Link href="/" className="hidden lg:block">
          <Framer animation={slideUp(0.4)}>
            <Image
              src="/logo.png"
              height={140}
              width={140}
              alt="logo"
              className={cn(
                (pathname == "/gallery" ||
                  pathname == "/mosaic-studio" ||
                  pathname == "/anasa-collection") &&
                  " grayscale-100 brightness-[1000%] "
              )}
            />
          </Framer>
        </Link>
        <Framer animation={slideUp(0.6)}>
          <div
            className={cn(
              "hidden lg:flex border border-gray-50 p-1 rounded-full gap-1",
              (pathname == "/gallery" ||
                pathname == "/mosaic-studio" ||
                pathname == "/anasa-collection") &&
                "border-gray-500"
            )}
          >
            {routes?.map((link, index) =>
              !link.type ? (
                <Link
                  href={link.path}
                  className={cn(
                    " p-2 px-4 rounded-full w-fit",
                    pathname == link.path && " bg-primary text-white",
                    (pathname == "/gallery" ||
                      pathname == "/mosaic-studio" ||
                      pathname == "/anasa-collection") &&
                      "text-white"
                  )}
                  key={index}
                >
                  <Framer animation={fadeInLetters(index + 3)}>
                    {link.name}
                  </Framer>
                </Link>
              ) : (
                <Popover key={index}>
                  <PopoverTrigger
                    className={cn(
                      "p-2 px-4  cursor-pointer",
                      (pathname == "/gallery" ||
                        pathname == "/mosaic-studio") &&
                        "text-white",
                      link?.links?.some((obj) => obj.path === pathname) &&
                        "bg-primary rounded-full text-white"
                    )}
                  >
                    <Framer animation={fadeInLetters(index + 3)} className="">
                      <div className="flex items-center gap-1">
                        {link.name}
                        <ChevronDown size={20} />
                      </div>
                    </Framer>
                  </PopoverTrigger>
                  <PopoverContent className="ml-[220px] mt-1">
                    <div className={cn("grid grid-cols-1 gap-2")}>
                      {link?.links.map((item, index) => (
                        <PopoverClose asChild key={index}>
                          <Link
                            href={item.path}
                            key={index}
                            className={cn(
                              pathname == item?.path && "text-primary"
                            )}
                          >
                            {item.name}
                          </Link>
                        </PopoverClose>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              )
            )}
          </div>
        </Framer>
        <div className="lg:hidden flex items-center justify-between w-full z-50">
          <Link href="/" className="">
            <Framer animation={slideUp(0.4)}>
              <Image
                src="/logo.png"
                height={140}
                width={140}
                alt="logo"
                className={cn(
                  (pathname == "/gallery" ||
                    pathname == "/mosaic-studio" ||
                    pathname == "/anasa-collection") &&
                    " grayscale-100 brightness-[1000%] "
                )}
              />
            </Framer>
          </Link>
          <Hamburger
            color={
              menu
                ? "white"
                : pathname == "/gallery" ||
                  pathname == "/mosaic-studio" ||
                  pathname == "/anasa-collection"
                ? "white"
                : "black"
            }
            toggled={menu}
            toggle={setMenu}
          />
        </div>
        {menu && (
          <div
            className="fixed top-0 h-full bg-cover w-full bg-[#030303]  z-40 left-0"
            style={{
              backgroundImage: `url(https://images.ctfassets.net/5u1qf3np9lb7/13zP4J7mi9ohIoERl0KQCL/7659502eee2e3c98364b3af37c66c02a/wood-brown.svg)`,
            }}
          >
            <div className=" gap-3 pt-[120px] space-y-6 main">
              {routes?.map((item, index) => (
                <Framer animation={slideUp(index * 0.2)} key={index}>
                  {!item?.links ? (
                    <Link
                      className={`w-fit text-gray-300 text-2xl flex justify-between items-center gap-3 `}
                      href={item.path}
                      onClick={closeMenu}
                    >
                      {item.name}
                      <ChevronRight size={20} />
                    </Link>
                  ) : (
                    item?.links.map((data, i) => (
                      <Link
                        href={data.path}
                        className={cn(
                          "w-fit text-gray-300 text-2xl flex justify-between items-center gap-3 ",
                          (i == 0 || i == 1) && "pb-5"
                        )}
                        onClick={closeMenu}
                      >
                        {data?.name}
                        <ChevronRight size={20} />
                      </Link>
                    ))
                  )}
                </Framer>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
