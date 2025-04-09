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
        <div className=" tp-service-area section-padding ">
            <div className="container mx-auto">
                {/* Section Title */}
                <div className=" tp-section-title">
                    <span >Check services</span>
                    <h2 >My Best Services</h2>
                </div>

                {/* Services List */}
                <div className="tp-service-wrap ">
                    <div className='flex flex-wrap align-items-center'>
                    {Services.slice(0, 4).map((service, srv) => (
                        <div className="w-full md:w-1/2 lg:w-1/4" key={srv}>
                            <div className='tp-service-item'>
                                <i className={`fi ${service.icon} `}></i>
                                <h2
                                   
                                    onClick={() => handleClickOpen(service)}
                                >
                                    {service.sTitle}
                                </h2>
                                <p >
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings.
                                </p>
                                <button
                                    className="read-more"
                                    onClick={() => handleClickOpen(service)}
                                >
                                    <i className="fi flaticon-right-arrow mr-2"></i> 
                                </button>


                            </div>
                           
                        </div>
                    ))}

                    </div>
                    
                </div>
            </div>

            {/* Visible Rotate Text */}
            <div className="visible-rotate-text">
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
