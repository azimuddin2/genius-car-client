import React from 'react';
import Service from './Service';
import { Zoom } from 'react-reveal';
import useServices from '../../../hooks/useServices';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services] = useServices();

    return (
        <section>
            <Zoom left>
                <div className='text-center'>
                    <p className='text-primary font-bold text-lg'>Service</p>
                    <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-accent'>Our Service Area</h1>
                    <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
                </div>
            </Zoom>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 py-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'>
                    <button className="btn btn-primary btn-outline capitalize font-semibold">More Services</button>
                </Link>
            </div>
        </section>
    );
};

export default Services;