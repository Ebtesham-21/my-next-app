"use client";


import Navbar from "./components/Navbar/page"; 
import About from "./components/About/page"; 
import { Element } from "react-scroll";
import Hero from "./components/Hero/page"; 
import ServiceSection from "./components/ServiceSection/page";
import Marque from "./components/Marque/page";
import ProjectSection from "./components/ProjectSection/page";
import BackToTop from "./components/BackToTop/page";
import Testimonial from './components/Testimonial/page';
import Blog from './components/BlogSection/page';
import ContactArea from './components/ContactArea/page';
import Footer from './components/Footer/page';

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
      <Element name="service">
        <ServiceSection />
      </Element>
      
        <Marque />
      
      <Element name="project">
        <ProjectSection />
      </Element>

      <Testimonial/>

      <Element name="blog">
        <Blog/>
      </Element>
      <Element name='contact'>
        <ContactArea/>
      </Element>

  
      </div>
      <BackToTop/>
      <Footer/>

    </main>
  );
}
