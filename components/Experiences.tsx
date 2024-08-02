"use client"

import { workExperience } from "@/data";
import React,{useEffect} from "react";
import { Button } from "./ui/MovingBorders";
import gsap from "gsap";

const Experiences = () => {
  useEffect(() => {

    gsap.fromTo(
      ".experiences-title-animation",
      { translateY: "50%", opacity: 0 },
      {
        translateY: "0%",
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#experiences",
          start: "top 60%",
          end: "bottom 70%",
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      ".experiences-animation",
      { gap:'5rem' },
      {
        gap:'2.5rem',
        opacity: 1,
        delay:0,
        ease: "power1.out",
        stagger: {
          each: 0,
          from: "start",
        },
        scrollTrigger: {
          trigger: "#experiences",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="pt-10 pb-10" id="experiences">
      <h1 className="heading experiences-title-animation">
        A little summary of
        <span className="text-purple"> my experiences</span>
      </h1>

      <div
        className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 
     gap-10"
      >
        {workExperience.map((card) => (
          <Button
            key={card.id}
             duration={Math.floor(Math.random() * 5000)
                +5000
            }
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200
            dark:border-slate-800 experiences-animation"
          >
            <div
              className="flex lg:flex-row flex-col lg:items-center
                p-3 py-6 md:p-5 lg:p-10 gap-2"
            >
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1
                  className="text-start text-xl 
                        md:text-2xl font-bold"
                >
                  {card.title}
                </h1>
                <p
                  className="text-start text-white-100 mt-3
                        font-semibold"
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
