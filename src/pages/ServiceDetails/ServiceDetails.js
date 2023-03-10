import React from 'react';
import { useLoaderData } from 'react-router-dom';
import serviceDetailsImg from '../../assets/images/checkout/checkout.png';
import './ServiceDetails.css';
import Download from '../../components/Download/Download';
import SpecialQuote from '../../components/SpecialQuote/SpecialQuote';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { title, img, price, facility, description } = service;

    return (
        <section className='px-4 lg:px-8 lg:py-4 '>
            {/* service details banner */}
            <div className='mb-8 lg:mb-20 w-full relative'>
                <div className='service-details-img'>
                    <img className='w-full h-full' src={serviceDetailsImg} alt="" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-4 lg:left-6 lg:w-96 lg:h-48 top-1/2 lg:top-3/4">
                    <h1 className='text-2xl lg:text-4xl text-white font-semibold'>Service Details</h1>
                </div>
            </div>
            {/* left side service details */}
            <div className='lg:flex flex-row mb-12'>
                <div className='basis-2/3'>
                    <img src={img} alt="" className='rounded-lg' />
                    <h1 className='font-semibold text-4xl my-5'>{title}</h1>
                    <p className='text-secondary text-base mb-8'>{description}</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5'>
                        {
                            facility.map(fac => <div className='border-t-2 border-t-primary rounded-lg p-8' style={{ backgroundColor: '#F3F3F3' }}>
                                <h2 className='text-xl font-bold mb-2'>{fac.name}</h2>
                                <p className='text-base text-secondary'>{fac.details}</p>
                            </div>)
                        }
                    </div>
                </div>
                {/* Right side */}
                <div className='basis-1/3 lg:ml-6'>
                    <Download></Download>
                    <SpecialQuote></SpecialQuote>
                    <div>
                        <h1 className='my-6 text-4xl font-bold'>Price: ${price}</h1>
                        <button
                            className='btn btn-primary text-white w-full h-14 text-lg capitalize'
                        >
                            Proceed Checkout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;