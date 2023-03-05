import React from 'react';
import facebook from '../../../assets/icons/facebook.svg';
import twitter from '../../../assets/icons/twitter.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import instagram from '../../../assets/icons/instagram.svg';

const Team = ({ team }) => {
    const { image, title, job } = team;

    return (
        <div className="card border h-full ml-5">
            <figure className="px-6 pt-6">
                <img src={image} alt="Shoes" className="rounded-xl h-full w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold text-2xl text-neutral">{title}</h2>
                <p className='text-secondary'>{job}</p>
                <div className='flex items-center'>
                    <a href='https://web.facebook.com/au.pranto.5' target="_blank" rel="noReferrer">
                        <img src={facebook} className='mr-2 cursor-pointer w-9' alt="Facebook" />
                    </a>
                    <a href='https://github.com/azimuddin2' target="_blank" rel="noReferrer">
                        <img src={twitter} className='mr-2 cursor-pointer w-9' alt="Twitter" />
                    </a>
                    <a href='https://www.linkedin.com/in/mohammad-azim-uddin-232284241/' target="_blank" rel="noReferrer">
                        <img src={linkedin} className='mr-2 cursor-pointer w-9' alt="Linkedin" />
                    </a>
                    <a href='https://github.com/azimuddin2' target="_blank" rel="noReferrer">
                        <img src={instagram} className='mr-2 cursor-pointer w-9' alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Team;