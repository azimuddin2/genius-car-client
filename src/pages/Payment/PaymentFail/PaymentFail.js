import React from 'react';
import { MdDoNotDisturbAlt } from 'react-icons/md';

const PaymentFail = () => {
    return (
        <div className='py-12'>
            <MdDoNotDisturbAlt className='text-8xl md:text-9xl text-red-500 mx-auto'></MdDoNotDisturbAlt>
            <h1 className='text-2xl md:text-4xl text-red-500 text-center'>Something Went wrong!</h1>
            <h2 className='text-center text-xl md:text-2xl mt-2 text-secondary'>Please Pay Try Again.</h2>
        </div>
    );
};

export default PaymentFail;