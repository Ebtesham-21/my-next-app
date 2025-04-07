"use client";

import Image from "next/image";
import Navbar from "./components/Navbar/page"; 
import About from "./components/About/page"; 
import { Element } from "react-scroll";
import Hero from "./components/Hero/page"; 
import ServiceSection from "./components/ServiceSection/page";
import Marque from "./components/Marque/page";
import ProjectSection from "./components/ProjectSection/page";
import BackToTop from "./components/BackToTop/page";
import Testimonial from './components/Testimonial/page';

export default function Home() {
  return (
    <main >
      
      <Navbar />

    <div id="top">

    
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="servicesection">
        <ServiceSection />
      </Element>
      <Element name="servicesection">
        <Marque />
      </Element>
      <Element name="projectsection">
        <ProjectSection />
      </Element>
      <Testimonial/>
      </div>
      <BackToTop/>

    </main>
  );
}
