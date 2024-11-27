'use client'
import Harta from "@/components/harta";
import Contact from "@/components/acasa/contact";
import CoreValues from "@/components/acasa/core-values";
import Despre from "@/components/acasa/despre";
import Hero from "@/components/acasa/hero";
import PacheteleNoastre from "@/components/acasa/pachetele-noastre";
import Repatriere from "@/components/acasa/repatriere";
import ServiciiOferite from "@/components/acasa/servicii-oferite";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Despre/>
      <CoreValues/>
      <ServiciiOferite/>
      <PacheteleNoastre/>
      <Repatriere/>
      <Harta/>
      <Contact/>
    </div>
  );
}
