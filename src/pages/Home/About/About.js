import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
import { Fade } from 'react-reveal';

const About = () => {
    return (
        <div className="hero my-10 lg:my-16">
            <div className="hero-content flex-col lg:flex-row">
                <Fade left>
                    <div className='relative lg:w-1/2'>
                        <img src={person} alt='Person' className="w-4/5 h-full rounded-lg" />
                        <img src={parts} alt='Parts' className="absolute right-5 top-1/2 w-3/5 border-8 border-white rounded-lg" />
                    </div>
                </Fade>
                <Fade right>
                    <div className='lg:w-1/2'>
                        <p className='text-primary font-bold text-lg mb-4'><span>About Us</span></p>
                        <h1 className="text-3xl lg:text-5xl font-semibold text-accent leading-tight lg:w-96">We are qualified & of experience in this field</h1>
                        <p className="py-4 lg:w-3/4 text-secondary leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='lg:w-3/4 text-secondary leading-7'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary text-white capitalize mt-7">Get More Info</button>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default About;