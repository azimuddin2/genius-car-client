import React from 'react';
import { Fade } from 'react-reveal';
import calendar from '../../../assets/icons/calendar.svg';
import phone from '../../../assets/icons/phone.svg';
import location from '../../../assets/icons/location.svg';

const Information = () => {
    return (
        <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 py-10 lg:px-14 bg-black text-white rounded-xl my-12 lg:my-20'>
            <Fade top>
                <div className="card lg:card-side shadow-xl">
                    <figure>
                        <img src={calendar} alt="Calender Icon" />
                    </figure>
                    <div className="card-body text-center lg:text-left">
                        <h4 className="text-base">We are open monday-friday</h4>
                        <h2 className='font-bold text-2xl'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="card lg:card-side shadow-xl">
                    <figure>
                        <img src={phone} alt="Calender Icon" />
                    </figure>
                    <div className="card-body text-center lg:text-left">
                        <h4 className="text-base">Have a question?</h4>
                        <h2 className='font-bold text-2xl'>+2546 251 2658</h2>
                    </div>
                </div>
            </Fade>
            <Fade top>
                <div className="card lg:card-side shadow-xl">
                    <figure>
                        <img src={location} alt="Calender Icon" />
                    </figure>
                    <div className="card-body text-center lg:text-left">
                        <h4 className="text-base">Need a repair? our address</h4>
                        <h2 className='font-bold text-2xl'>Liza Street, New York</h2>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Information;