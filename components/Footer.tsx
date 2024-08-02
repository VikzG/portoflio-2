"use client"

import React,{useEffect} from "react";
import { FaLocationArrow } from "react-icons/fa";
import { ShimmerButton } from "./ui/ShimmerButton";
import { socialMedia } from "@/data";
import gsap from "gsap";

const Footer = () => {

  useEffect(() => {
    gsap.fromTo(
      ".footer-animation",
      { opacity:0 },
      {
        opacity:1 ,
        delay:0,
        ease: "power1.out",
        stagger: {
          each: 0,
          from: "start",
        },
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 footer-animation" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          You want to bring<span className="text-purple"> your </span>
          idea to life?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:jeremy.bouzemame@gmail.com">
          <ShimmerButton
            title="Contact me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div
        className="flex mt-16 md:flex-row flex-col 
  justify-between md:gap-0 gap-6 items-center"
      >
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Jeremy B.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              href={profile.url}
              key={profile.id}
              className="w-10 h-10 
                cursor-pointer flex justify-center 
                items-center backdrop-filter 
                backdrop-blur-lg saturate-180 bg-opacity-50 bg-black-200
                rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.alt} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
