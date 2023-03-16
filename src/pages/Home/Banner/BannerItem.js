import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full h-full rounded-xl" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-4 lg:left-24 lg:w-96 top-1/4 lg:top-1/3">
                <h1 className='text-2xl lg:text-6xl text-white font-semibold'>Affordable Price For Car Servicing</h1>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-4 lg:left-24 lg:w-2/5 top-1/2">
                <p className='text-white text-sm lg:text-lg lg:leading-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-4 lg:left-24 top-3/4 lg:top-2/3">
                <button className="btn btn-primary mr-2 lg:mr-5">Discover More</button>
                <button className="btn btn-outline text-white hidden md:block lg:block">Latest Project</button>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-4 lg:right-12 -bottom-5 lg:bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4" style={{ background: "rgba(255, 255, 255, 0.2)" }}>
                    <FaArrowLeft></FaArrowLeft>
                </a>
                <a href={`#slide${next}`} className="btn btn-primary btn-circle">
                    <FaArrowRight></FaArrowRight>
                </a>
            </div>
        </div>
    );
};

export default BannerItem;