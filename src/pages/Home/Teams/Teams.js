import React from 'react';
import Carousel from 'react-elastic-carousel';
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

    const breakPoints = [
        { width: 1, itemsToShow: 1, pagination: false },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3, pagination: false },
        { width: 1150, itemsToShow: 3, itemsToScroll: 2, pagination: false },
        { width: 1450, itemsToShow: 3, pagination: false },
        { width: 1750, itemsToShow: 3, pagination: false },
    ];

    return (
        <section className='mb-8 mt-16 lg:my-20'>
            <div className='text-center'>
                <p className='text-primary font-bold text-lg'>Team</p>
                <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-accent'>Meet Out Team</h1>
                <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
            </div>
            <div className='mt-6'>
                <Carousel
                    breakPoints={breakPoints}
                    enableAutoPlay
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