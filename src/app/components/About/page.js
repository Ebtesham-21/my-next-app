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
                    <div className='lg:w-1/2 w-full'>
                        <div className='text-center lg:text-left'>
                            <small className='text-lg text-white'>About Me</small>
                            <h2 className='text-3xl font-semibold mt-4 mb-2'>
                                Welcome to Tonu, Best Software Services
                            </h2>
                            <h5 className='text-xl text-gray-700 mb-4 '>
                             I have 8+ years of experience in Software Development to give you better services.

                            </h5>
                            <p className='text-gray-600 mb-6'>
                                 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence. 
                            </p>


                            {/* fun facts */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
                                <div className='funfact-item'>
                                    <h3 className='text-4xl font-bold text-[#e5540a] '><span>500</span>+</h3>
                                    <p className="text-lg text-gray-600">Projects Completed</p>


                                </div>
                                <div className="funfact-item">
                                <h3 className="text-4xl font-bold text-[#e5540a]"><span>52</span>+</h3>
                                <p className="text-lg text-gray-600">Awards Win</p>
                                </div>
                                <div className="funfact-item">
                                <h3 className="text-4xl font-bold text-[#e5540a]"><span>2</span>M+</h3>
                                <p className="text-lg text-gray-600">Happy Clients</p>
                                </div>

                            </div>

                        </div>
                    </div>



                </div>

            </div>

        {/* visible text section */}
        <div className='absolute top-1/2 left-0 w-full text-center'>
            <h1 className='text-6xl font-bold text-white opacity-25 transform rotate-12'>About Me</h1>

        </div>
        </section>
    );
};

export default About;