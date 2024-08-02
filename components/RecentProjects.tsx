"use client"

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";

const RecentProjects = () => {

  useEffect(() => {

    gsap.fromTo(
      ".projects-title-animation",
      { translateY: "50%", opacity: 0 },
      {
        translateY: "0%",
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 60%",
          end: "bottom 70%",
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      ".projects-animation",
      { scale:0.5, opacity: 0 },
      {
        scale:1,
        opacity: 1,
        delay:0,
        ease: "power1.out",
        stagger: {
          each: 0.2,
          from: "start",
        },
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading projects-title-animation">
        A short presentation of {""}
        <span className="text-purple">my projects</span>
      </h1>
      <div className="flex flex-wrap items-center
       justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]
                flex items-center justify-center sm:w-[570px] w-[80vw] projects-animation"
          >
            <PinContainer title={link} href={link}>
              <div
                className="relative flex item-center justify-center
                sm:w-[570px] w-[80vw] overflow-hidden h-[30vh]
                mb-10 sm:h-[40vh]"
              >
                <div
                  className="relative w-full h-full overflow-hidden
                    lg:rounded-3xl bg-[#13162d]"
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0 rounded-xl w-5/6 h-3/4 rotate-3" />
              </div>
              <h1
                className="font-bold lg:text-2xl md:text-xl
                text-base line-clamp-1"
              >
                {title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal
                font-light text-sm line-clamp-2"
              >
                {des}
              </p>
              <div
                className="flex items-center justify-between
                mt-7 mb-3"
              >
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border
                        border-white/[0.2] rounded-full bg-black lg:w-10
                        lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p
                    className="flex lg:text-xl md:text-xs 
                    text-sm text-purple"
                  >
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
