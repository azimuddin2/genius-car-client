import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <div className='text-center'>
                <p className='text-primary font-bold text-lg'>Service</p>
                <h1 className='font-bold text-4xl leading-snug text-accent'>Our Service Area</h1>
                <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-primary btn-outline capitalize font-semibold">More Services</button>
            </div>
        </section>
    );
};

export default Services;