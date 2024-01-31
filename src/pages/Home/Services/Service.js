import React from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, title, price } = service;
    const navigate = useNavigate();

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
                        <IoArrowForwardCircleOutline
                            onClick={() => navigate(`/service/${_id}`)}
                            className='text-primary text-3xl cursor-pointer'
                        ></IoArrowForwardCircleOutline>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Service;