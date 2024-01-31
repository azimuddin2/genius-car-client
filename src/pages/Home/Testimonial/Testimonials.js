import React from 'react';
import Testimonial from './Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
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

    return (
        <section className='mt-20 mb-10'>
            <Zoom left>
                <div className='text-center'>
                    <p className='text-primary font-bold text-lg'>Testimonial</p>
                    <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-accent'>What Customer Says</h1>
                    <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.</p>
                </div>
            </Zoom>
            <Zoom bottom>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#FF3811",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "12px",
                        "--swiper-pagination-bullet-horizontal-gap": "3px",

                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "18px",
                        "--swiper-navigation-top-offset": "6%"
                    }}
                    className="mySwiper"
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 1,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 2,
                        },
                    }}
                    modules={[A11y, Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    <div>
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <Testimonial review={review}></Testimonial>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </Zoom>
        </section>
    );
};

export default Testimonials;