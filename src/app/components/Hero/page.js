"use client";
import React from "react";
import { Link } from "react-scroll";
import NavLink from 'next/link';
import Image from "next/image";
import himg from "/public/images/slider/asset 1.webp";


const Hero = () => {
  return (
    <section className="tp-hero-section-1 relative w-full bg-[#090909] py-28">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center ">
            {/* Left text section */}
            <div className="tp-hero-section-text w-full lg:w-1/2 text-center lg:text-left">
            <div className="tp-hero-title"> 
                <h2 className="text-8xl font-bold text-[#ffffff] leading-tight">
                    App & Software Developer    
                </h2> 
            </div>

            <div className="tp-hero-sub">
                <p className="text-4xl text-[#ffffff85] mt-2">
                    R o b e r t   M i l l e r
                </p>

            </div>
                          
               
                <div className="btns mt-6">
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-95}
                        className=" theme-btn inline-block bg-[#525252] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e5540a] transition duration-300 cursor-pointer "
                    >
                        Contact Me
                    
                    </Link>

                </div>


            </div>

            {/* Right image section */}
            <div className="right-vec w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                <Image
                    src={himg}
                    alt="Developer Image"
                    className="right-img w-full max-w-md lg:max-w-lg object-cover"
                />

            </div>

            

        </div>

        {/* {Social media links} */}
        <div className="social-link absolute bottom-6 left-6 space-x-4">
        <ul>
                    <li><NavLink href="/">Facebook</NavLink></li>
                    <li><NavLink href="/">Twitter</NavLink></li>
                    <li><NavLink href="/">Instagram</NavLink></li>
                </ul>

        </div>


        {/* background visible text */}
        <div className="visible-text">
            Developer
        </div>






    </section>
  );
};

export default Hero;
