"use client";

import React, { useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ShimmerButton } from "./ui/ShimmerButton";
import { FaLocationArrow } from "react-icons/fa";
import mylogo from "../public/my_logo.png";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".my-logo",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 0.08,
        scale: 1,
        delay: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 60%",
          end: "bottom 70%",
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      ".hero-sentence",
      { opacity: 0, scale: 1.5 },
      {
        opacity: 1,
        scale: 1,
        delay: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 60%",
          end: "bottom 70%",
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      ".hero-button-animation",
      { opacity: 0, scale: 1.5 },
      {
        opacity: 1,
        scale: 1,
        delay: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 60%",
          end: "bottom 70%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <div className="pb-10 pt-28 md:pb-20 md:pt-36 relative hero-section">
      <div className="relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#98E4FF"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#7FC7D9"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center my-10 md:my-20 z-10 relative">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="relative w-full flex justify-center">
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              aria-hidden="true"
            >
              <img
                src={mylogo.src}
                className="my-logo opacity-0 w-64 md:w-96 lg:w-[28rem] max-w-none"
                alt=""
              />
            </div>
            <TextGenerateEffect
              className="relative text-center text-[40px]
          md:text-5xl lg:text-6xl"
              words={"Salut, moi c'est Jeremy, développeur full-stack"}
            />
          </div>
          <p
            className="hero-sentence opacity-0 text-center md:tracking-wider mb-4
            text-sm md:text-lg lg:text-2xl"
          >
            {"Je conçois des sites et applications web rapides, soignés et sur mesure, de l'idée à la mise en ligne."}
          </p>
          <a href="#projects">
            <ShimmerButton
              title="Voir mes projets"
              otherClasses="hero-button-animation opacity-0"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
