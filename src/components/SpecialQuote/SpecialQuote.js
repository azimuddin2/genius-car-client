import React from 'react';
import logo from '../../assets/logo.png';

const SpecialQuote = () => {
    return (
        <div className='bg-accent text-white p-6 lg:p-12 pb-20 lg:pb-20 rounded-xl mt-6'>
            <div>
                <img src={logo} alt="" className='mx-auto w-28' />
                <h1 className='text-xl font-semibold text-center my-6'>Need Help? We Are Here To Help You</h1>
            </div>
            <div className='bg-white text-center py-8 rounded-xl relative'>
                <h2 className='text-primary text-2xl font-bold'>Car Doctor <span className='text-accent'>Special</span></h2>
                <h4 className='text-secondary text-lg font-bold mb-4'>Save up to <span className='text-primary'>50% off</span></h4>
            </div>
            <button
                className='btn btn-primary text-lg h-16 w-52 text-white absolute -mt-9 ml-11'
            >
                Get A Quote
            </button>
        </div>
    );
};

export default SpecialQuote;