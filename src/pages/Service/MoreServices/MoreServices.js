import React from 'react';
import { Zoom } from 'react-reveal';
import useServices from '../../../hooks/useServices';
import Service from '../../Home/Services/Service';
import useTitle from '../../../hooks/useTitle';

const MoreServices = () => {
    useTitle('Services');
    const [services] = useServices();

    return (
        <section className='px-4 lg:px-8'>
            <Zoom left>
                <div className='text-center'>
                    <p className='text-primary font-bold text-lg'>Services</p>
                    <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-accent'>Our Service Area</h1>
                    <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
                </div>
            </Zoom>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-12 pb-16'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default MoreServices;