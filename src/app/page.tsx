"use client";

import Image from "next/image";
import Navbar from "./components/Navbar/page"; 
import About from "./components/About/page"; 
import { Element } from "react-scroll";
import Hero from "./components/Hero/page"; 
import ServiceSection from "./components/ServiceSection/page";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

    
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="servicesection">
        <ServiceSection />
      </Element>
    </main>
  );
}
