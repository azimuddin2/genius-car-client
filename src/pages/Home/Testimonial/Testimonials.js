import React from 'react';
import Carousel from 'react-elastic-carousel';
import Testimonial from './Testimonial';
import { Zoom } from 'react-reveal';
import people1 from '../../../assets/images/review/people1.png';
import people2 from '../../../assets/images/review/people2.png';
import people3 from '../../../assets/images/review/people3.png';
import people4 from '../../../assets/images/review/people4.png';
import people5 from '../../../assets/images/review/people5.png';
import people6 from '../../../assets/images/review/people6.png';
import './Testimonials.css';

const reviews = [
    {
        id: 1,
        image: people1,
        name: 'Awlad Hossain',
        location: 'Businessman'
    },
    {
        id: 2,
        image: people2,
        name: 'Miftahul Jannat',
        location: 'India'
    },
    {
        id: 3,
        image: people3,
        name: 'Tahiya Faiza',
        location: 'Bangladesh'
    },
    {
        id: 4,
        image: people4,
        name: 'Jhankar Mahbub',
        location: 'USA'
    },
    {
        id: 5,
        image: people5,
        name: 'Azim Uddin',
        location: 'Bangladesh'
    },
    {
        id: 6,
        image: people6,
        name: 'Munzereen',
        location: 'Businessman'
    },
];

const Testimonials = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1, pagination: false },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 2, pagination: false },
        { width: 1150, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 1450, itemsToShow: 3, pagination: false },
        { width: 1750, itemsToShow: 3, pagination: false },
    ];

    return (
        <section className='my-20'>
            <Zoom left>
                <div className='text-center'>
                    <p className='text-primary font-bold text-lg'>Testimonial</p>
                    <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-accent'>What Customer Says</h1>
                    <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.</p>
                </div>
            </Zoom>
            <Zoom bottom>
                <div className='styling-example mt-6 '>
                    <Carousel
                        breakPoints={breakPoints}
                        enableAutoPlay
                    >
                        {
                            reviews.map(review => <Testimonial
                                key={review.id}
                                review={review}
                            ></Testimonial>)
                        }
                    </Carousel>
                </div>
            </Zoom>
        </section>
    );
};

export default Testimonials;