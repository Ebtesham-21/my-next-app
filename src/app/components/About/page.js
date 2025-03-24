import Image from 'next/image';
import React from 'react';
import aImg from "/public/images/about/asset 2.webp";

const About = (props) => {
    return (
        <section className='py-20 bg-[#090909]'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-wrap items-center'>
                    {/* Left column (Image) */}
                    <div className='lg:w-1/2 w-full mb-12 lg:mb-0'>
                        <div className='relative'>
                            <Image src={aImg} alt="About Image" className='w-full h-auto rounded-lg' />
                            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg '>
                                <div className='text-white text-center'>
                                    <h3 className='text-4xl font-bold'>8+</h3>
                                    <span className='text-lg'>Years Experience</span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Right colums (text) */}
                    

                </div>

            </div>

        </section>
    );
};

export default About;