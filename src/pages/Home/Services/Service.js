import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Fade } from 'react-reveal';

const Service = ({ service }) => {
    const { _id, img, title, price } = service;

    return (
        <Fade bottom>
            <div className="card bg-base-100 border">
                <figure className="px-6 pt-6">
                    <img src={img} alt={title} className="rounded-xl h-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl text-neutral">{title}</h2>
                    <div className='flex items-center justify-between'>
                        <p className='text-primary font-semibold text-xl'>Price: ${price}</p>
                        <HiArrowRight className='text-primary text-2xl cursor-pointer'></HiArrowRight>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Service;