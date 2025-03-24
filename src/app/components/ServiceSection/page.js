import React, {useState} from 'react';
import Services from '../../api/service';
import ServiceSingle from '../ServiceSingle';


const ServiceSection = (props) => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };


    return (
        <div className='py-20'>
            <div className='container mx-auto px-6'>
                {/* Section title */}
                <div className='text-center mb-12'>
                    <span className='text-lg text-[#e5540a]'>Check services</span>
                    <h2 className='text-3xl font-semibold mt-2'>
                        My Best Services
                    </h2>


                </div>

                {/* Services List */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {Services.slice(0,4).map((service, srv) => (
                        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg' key={srv}>
                            <i className={`fi ${service.icon} text-4xl text-[#e5540a] mb-4`}></i>
                            <h2 className='text-xl font-semibold text-gray-800 cursor-pointer hover:text-[#e5540a]'
                            onClick={() => handleClickOpen(service)}
                            >
                                {service.sTitle}
                            </h2>
                            <p className='text-gray-600 mt-2'>
                                 A wonderful serenity has taken possession of my entire soul, like these sweet mornings.
                            </p>
                            <button
                                className="mt-4 text-blue-500 flex items-center"
                                onClick={() => handleClickOpen(service)}
                            >
                                <i className="fi flaticon-right-arrow mr-2"></i> Read More
                            </button>

                        </div>
                    ))}

                </div>

            </div>

            {/* Visible rotate text */}
            <div className='absolute top-1/2 left-0 w-full text-center transform -translate-y-1/2'>
                    <h1 className='text-6xl font-bold text-white opacity-25 transform rotate-12'>
                        Services
                    </h1>

            </div>

            

        </div>
    )
}