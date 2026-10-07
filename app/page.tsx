"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import React, { useState, useEffect } from 'react';
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
 <main className="relative bg-black-100 flex 
 justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        {loading ? (
        <Loader />
      ) : (
  <div className="max-w-7xl w-full">
    <SmoothScroll />
    <FloatingNav navItems={navItems}
    />
    <Hero />
    <Grid />
    <RecentProjects />
    <Experiences />
    <Footer />
  </div>
        )}
 </main>
  );
}
