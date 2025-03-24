"use client";

import Image from "next/image";
import Navbar from "./components/Navbar/page"; // Ensure correct path
import { Element } from "react-scroll";
import Hero from "./components/Hero/page"; // Ensure correct path

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Smooth Scroll */}
      <Element name="home">
        <Hero />
      </Element>
    </main>
  );
}
