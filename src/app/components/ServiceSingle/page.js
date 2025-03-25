import React, {useState, Fragment} from 'react';
import {Dialog} from '@mui/material';
import Contact from './contact';
import Services from '@/app/api/service';
import Image from 'next/image';


const ServiceSingle = ({maxWidth, open, onClose, title, dImg, sImg1, sImg2}) => {
    return (
        <Fragment>
            <Dialog
                open={open}
                onClose = {onClose}
                className='modalWrapper quickview-dialog'
                maxWidth={maxWidth}
            >
                <div className='p-6 bg-white rounded-lg shadow-lg'>
                    <button className='absolute top-4 right-4 text-gray-600 hover:text-gray-900' onClick={onClose} >
                        <i className='fa fa-close'></i>

                    </button>
                    <div className='space-y-6'>
                        <div className='text-center'>
                            <Image src={dImg} alt="" className='rounded-lg' />
                            <h3 className='text-2xl font-semibold mt-4'>{title}</h3>


                        </div>
                        <p className='text-gray-600 text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <Image src={sImg1} alt="" className='rounded-lg'/>
                            <Image src={sImg2} alt="" className='rounded-lg'/>

                        </div>
                        <div>
                            <h3 className='text-xl font-semibold'>Our Capabilities</h3>
                            <p className="text-gray-600">Massa volutpat odio facilisis purus sit elementum...</p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                            </ul>
                        </div>
                        <div>
                        <h3 className="text-xl font-semibold">Our Work Process</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                            </ul>

                        </div>
                        <div>
                            <h3 className='text-xl font-semibold'>Related Service</h3>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                {Services.slice(0,3).map((service, srv) => (
                                    <div className='bg-gray-100 p-4 rounded-lg text-center' key={srv}>
                                        <i className={`fi ${service.icon} text-4xl text-blue-500 mb-2`}></i>
                                        <h2 className='text-lg font-semibold'>{service.sTitle}</h2>
                                        <p className='text-gray-600'>Lacus, etiam sed est eu tempus need Temer diam congue.</p>


                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='bg-gray-50 p-6 rounded-lg text-center'>
                            <h2 className='text-2xl font-semibold'>
                                 Have project in mind? Let's discuss
                            </h2>
                            <p className="text-gray-600">Get in touch with us to see how we can help you with your project</p>
                            <div className='mt-4'>
                                <Contact/>

                            </div>
                        </div>

                    </div>

                </div>

            </Dialog>
        </Fragment>
    );
}
export default ServiceSingle;