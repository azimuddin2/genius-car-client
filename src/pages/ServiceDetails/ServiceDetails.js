import React from 'react';
import { useLoaderData } from 'react-router-dom';
import serviceDetailsImg from '../../assets/images/checkout/checkout.png';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const { title, img, price, facility, description } = service;

    return (
        <section className='px-4 lg:px-8 lg:py-4 '>
            {/* service details banner */}
            <div className='mb-20 w-full relative'>
                <div className='service-details-img'>
                    <img className='w-full h-full' src={serviceDetailsImg} alt="" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-4 lg:left-6 lg:w-96 lg:h-48 top-1/2 lg:top-3/4">
                    <h1 className='text-2xl lg:text-4xl text-white font-semibold'>Service Details</h1>
                </div>
            </div>
            {/* service details */}
            <div>
                <img src={img} alt="" />
                <h1>{title}</h1>
                <p>{description}</p>
                <div>
                    {
                        facility.map(fac => <div>
                            <h2>{fac.name}</h2>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;