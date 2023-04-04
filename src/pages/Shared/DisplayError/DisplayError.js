import React from 'react';
import { Link } from 'react-router-dom';
import errorGif from '../../../assets/images/error/error.gif';
import { FaHome } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const DisplayError = () => {
    useTitle('Error');
    return (
        <div className='my-20 text-center'>
            <img src={errorGif} alt="" className='mx-auto mb-2' />
            <Link to="/">
                <button className='btn btn-primary text-white'>
                    <FaHome className='text-xl'></FaHome>
                    <span className='mt-1 ml-1'>Back to Home</span>
                </button>
            </Link>
        </div>
    );
};

export default DisplayError;