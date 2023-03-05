import React from 'react';
import teamsPerson from '../../../assets/icons/teams-person.svg';
import watch from '../../../assets/icons/watch.svg';
import supportPerson from '../../../assets/icons/support-person.svg';
import Wrench from '../../../assets/icons/Wrench.svg';
import check from '../../../assets/icons/check.svg';
import delivery from '../../../assets/icons/delivery.svg';

const Features = () => {
    return (
        <section className='my-20'>
            <div className='text-center'>
                <p className='text-primary font-bold text-lg'>Core Features</p>
                <h1 className='font-bold text-4xl leading-snug text-accent'>Why Choose Us</h1>
                <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
            </div>
            <div className='mt-10 grid lg:grid-cols-6 gap-5'>
                <div className="card border py-7">
                    <figure>
                        <img src={teamsPerson} alt="" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-center">
                        <h2 className="mt-3 font-bold text-neutral text-lg">Expert Team</h2>
                    </div>
                </div>
                <div className="card bg-primary py-7">
                    <figure>
                        <img src={watch} alt="" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-center">
                        <h2 className="mt-3 font-bold text-white text-lg">Timely Delivery</h2>
                    </div>
                </div>
                <div className="card border py-7">
                    <figure>
                        <img src={supportPerson} alt="" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-center">
                        <h2 className="mt-3 font-bold text-neutral text-lg">24/7 Support</h2>
                    </div>
                </div>
                <div className="card border py-7">
                    <figure>
                        <img src={Wrench} alt="" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-center">
                        <h2 className="mt-3 font-bold text-neutral text-lg">Best Equipment</h2>
                    </div>
                </div>
                <div className="card border py-7">
                    <figure>
                        <img src={check} alt="" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-center">
                        <h2 className="mt-3 font-bold text-neutral text-lg">100% Guranty</h2>
                    </div>
                </div>
                <div className="card border py-7">
                    <figure>
                        <img src={delivery} alt="" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-center">
                        <h2 className="mt-3 font-bold text-neutral text-lg">Timely Delivery</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;