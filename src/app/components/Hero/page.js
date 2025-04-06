"use client";
import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import himg from "/public/images/slider/asset 1.webp";


const Hero = () => {
  return (
    <section className="tp-hero-section-1 relative w-full bg-[#090909] py-28">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center ">
            {/* Left text section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-8xl font-bold text-[#ffffff] leading-tight">
                    App & Software Developer    
                </h2>            
                <p className="text-4xl text-[#ffffff85] mt-2">
                    R o b e r t   M i l l e r
                </p>
                <div className="mt-6">
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-95}
                        className="inline-block bg-[#525252] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e5540a] transition duration-300 cursor-pointer "
                    >
                        Contact Me
                    
                    </Link>

                </div>


            </div>

            {/* Right image section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                <Image
                    src={himg}
                    alt="Developer Image"
                    className="w-full max-w-md lg:max-w-lg object-cover"
                />

            </div>

            

        </div>

        {/* {Social media links} */}
        <div className="absolute bottom-6 left-6 space-x-4">
            <a href="/" className="text-[#ffffff] hover:text-[#e5540a]">Facebook</a>
            <a href="/" className="text-[#ffffff] hover:text-[#e5540a]">Twitter</a>
            <a href="/" className="text-[#ffffff] hover:text-[#e5540a]">Instagram</a>

        </div>


        {/* background visible text */}
        <div className="absolute bottom-0 right-6 text-gray-200 text-7xl font-bold opacity-10 select-none">
            Developer
        </div>






    </section>
  );
};

export default Hero;
