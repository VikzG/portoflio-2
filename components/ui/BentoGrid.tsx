"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState,useEffect } from "react";
import { ShimmerButton } from "./ShimmerButton";
import { IoCopyOutline } from "react-icons/io5";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const text = "jeremfront@gmail.com";
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    gsap.fromTo(
      ".grid-scrolltrigger",
      { translateY: "50%", opacity: 0 },
      {
        translateY: "0%",
        opacity: 1,
        delay:0,
        ease: "power1.out",
        stagger: {
          each: 0.2,
          from: "start",
        },
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl group/bento hover:shadow-xl shadow-input dark:shadow-none border justify-between flex flex-col opacity-0 space-y-4 border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
      //  background: "#645CAA"
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(112,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/*<div className="absolute z-50 flex items-center
          justify-center text-white font-bold"/> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-normal text-sm md:font-extralight text-[#A084CA] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 3 && (
            <div className=" flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 
              px-3 text-xs lg:text-base lg:opacity-100 rounded-full text-center bg-[#645CAA]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-full text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-full text-center bg-[#10132e]" />
                {["Photoshop", "Illustrator", "Indesign"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 
              px-3 text-xs lg:text-base lg:opacity-100 rounded-full text-center bg-[#645CAA]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <ShimmerButton
                title={copied ? "Copied !" : "Get my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
