import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Zoom } from 'react-reveal';
import team1 from '../../../assets/images/team/1.jpg';
import team2 from '../../../assets/images/team/2.jpg';
import team3 from '../../../assets/images/team/3.jpg';
import Team from './Team';

const teams = [
    {
        id: 1,
        image: team1,
        title: 'Car Engine Plug',
        job: 'Engine Expert'
    },
    {
        id: 2,
        image: team2,
        title: 'Electrical System',
        job: 'Electrical Expert'
    },
    {
        id: 3,
        image: team3,
        title: 'Full car Repair',
        job: 'Repair Expert'
    },
    {
        id: 4,
        image: team1,
        title: 'Car Engine Plug',
        job: 'Engine Expert'

    },
    {
        id: 5,
        image: team2,
        title: 'Electrical System',
        job: 'Electrical Expert'
    },
    {
        id: 6,
        image: team3,
        title: 'Full car Repair',
        job: 'Repair Expert'
    }
];

const Teams = () => {

    return (
        <section className='mb-8 mt-16 lg:my-20'>
            <Zoom left>
                <div className='text-center'>
                    <p className='text-primary font-bold text-lg'>Team</p>
                    <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-accent'>Meet Out Team</h1>
                    <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
                </div>
            </Zoom>
            <Zoom bottom>
                <div>
                    <Swiper
                        style={{
                            "--swiper-pagination-color": "#FF3811",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "12px",
                            "--swiper-pagination-bullet-horizontal-gap": "3px",

                            "--swiper-navigation-color": "#fff",
                            "--swiper-navigation-size": "18px",
                            "--swiper-navigation-top-offset": "4%"
                        }}
                        className="mySwiper lg:px-10"
                        breakpoints={{
                            576: {
                                width: 576,
                                slidesPerView: 1,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            1200: {
                                width: 1200,
                                slidesPerView: 3,
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
                                teams.map(team => <SwiperSlide key={team._id}>
                                    <Team team={team} ></Team>
                                </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                </div>
            </Zoom>
        </section>
    );
};

export default Teams;