"use client";
import React from "react";
import { Link } from "react-scroll";
import NavLink from 'next/link';
import Image from "next/image";
import himg from "/public/images/slider/asset 1.webp";


const Hero = () => {
  return (
    <section className="tp-hero-section-1 ">
    <div className="container">
        <div className="flex flex-wrap">
            <div className="w-7/12 lg:w-7/12">
                <div className="tp-hero-section-text">
                    <div className="tp-hero-title">
                        <h2>App & Software Developer</h2>

                    </div>
                    <div className="tp-hero-sub">
                        <p>Robert Miller</p>
                    </div>
                    <div className="btns">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95}
                         className="theme-btn">
                            Contact Me
                        </Link>

                    </div>

                </div>
            </div>
        </div>
        <div className="right-vec">
            <div className="right-img">
                <Image src={himg} alt=""  />

            </div>

        </div>
        
    </div>
    </section>   
  );
};

export default Hero;
