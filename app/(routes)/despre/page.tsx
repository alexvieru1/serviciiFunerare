import Contact from "@/components/acasa/contact";
import About from "@/components/despre/about";
import Details from "@/components/despre/details";
import EndSection from "@/components/despre/end-section";
import Hero from "@/components/despre/hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Details/>
      <EndSection/>
      <Contact/>
    </div>
  );
};

export default page;
