"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const SmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // anchors : gère aussi le défilement doux des liens du menu (#about, #projects...)
    const lenis = new Lenis({ duration: 1.2, anchors: true });

    // Synchronise Lenis avec les animations GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
