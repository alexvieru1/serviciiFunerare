"use client";
import useScreenSize from "@/hooks/useScreenSize";
import React from "react";

const Hero = () => {
  const isLargeScreen = useScreenSize();
  return (
    <div
      className="w-full h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/pachete-hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: isLargeScreen ? "center" : "bottom",
      }}
    >
      <h1 className="flex justify-center items-center text-white 4xs:text-lg md:text-2xl xl:text-4xl font-semibold">
        Pachete funerare
      </h1>
    </div>
  );
};

export default Hero;
