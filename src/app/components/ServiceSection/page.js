import React, { useState } from 'react';
import Services from '@/app/api/service';
import ServiceSingle from '../ServiceSingle/page';

const ServiceSection = (props) => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    return (
        <div className=" tp-service-area mt-6 pt-16 ">
            <div className="container mx-auto ">
                {/* Section Title */}
                <div className=" tp-section-title">
                    <span className="text-lg text-blue-500">Check services</span>
                    <h2 className="text-3xl text-white font-semibold mt-2">My Best Services</h2>
                </div>

                {/* Services List */}
                <div className="tp-service-wrap ">
                    <div className='row align-items-center'>
                    {Services.slice(0, 4).map((service, srv) => (
                        <div className="flex flex-col items-center  p-6 rounded-lg shadow-lg" key={srv}>
                            <div className='tp-service-item'>
                                <i className={`fi ${service.icon} text-4xl text-blue-500 mb-4`}></i>
                                <h2
                                    className="text-xl font-semibold text-white cursor-pointer hover:text-blue-500"
                                    onClick={() => handleClickOpen(service)}
                                >
                                    {service.sTitle}
                                </h2>
                                <p className="text-white mt-2">
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings.
                                </p>
                                <button
                                    className="mt-4 text-blue-500 flex items-center"
                                    onClick={() => handleClickOpen(service)}
                                >
                                    <i className="fi flaticon-right-arrow mr-2"></i> Read More
                                </button>


                            </div>
                           
                        </div>
                    ))}

                    </div>
                    
                </div>
            </div>

            {/* Visible Rotate Text */}
            <div className="absolute top-1/2 left-0 w-full text-center transform -translate-y-1/2">
                <h1 className="text-6xl font-bold text-white opacity-25 transform rotate-12">Services</h1>
            </div>

            {/* Service Single Modal */}
            <ServiceSingle
                open={open}
                onClose={handleClose}
                title={state.sTitle}
                dImg={state.sImgS}
                sImg1={state.ssImg1}
                sImg2={state.ssImg2}
            />
        </div>
    );
};

export default ServiceSection;
