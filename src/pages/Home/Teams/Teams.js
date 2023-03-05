import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 992 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 991, min: 577 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <section className='my-20'>
            <div className='text-center'>
                <p className='text-primary font-bold text-lg'>Team</p>
                <h1 className='font-bold text-4xl leading-snug text-accent'>Meet Out Team</h1>
                <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
            </div>
            <div className='mt-10'>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                >
                    {
                        teams.map(team => <Team
                            key={team.id}
                            team={team}
                        ></Team>)
                    }
                </Carousel>
            </div>
        </section>
    );
};

export default Teams;