"use client";

import { FaLocationArrow } from "react-icons/fa";
import { ShimmerButton } from "./ui/ShimmerButton";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Merci<span className="text-purple"> pour votre visite</span>&nbsp;!
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Échangeons et construisons quelque chose ensemble.
        </p>
        <a href="mailto:jeremfront@gmail.com">
          <ShimmerButton
            title="Me contacter"
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
          Copyright © 2026 Jeremy B.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              href={profile.url}
              key={profile.id}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.alt}
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
