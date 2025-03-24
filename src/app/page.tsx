"use client";

import Image from "next/image";
import Navbar from "./components/Navbar/page"; 
import About from "./components/About/page"; 
import { Element } from "react-scroll";
import Hero from "./components/Hero/page"; 

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Smooth Scroll */}
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
    </main>
  );
}
