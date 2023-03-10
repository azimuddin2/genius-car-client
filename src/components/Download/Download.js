import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';

const Download = () => {
    return (
        <div className='bg-accent text-white p-10 rounded-xl'>
            <h2 className='text-2xl font-bold mb-4'>Download</h2>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <HiOutlineDocumentChartBar className='text-4xl mr-4'></HiOutlineDocumentChartBar>
                    <div>
                        <h4 className='text-lg font-semibold'>Our Brochure</h4>
                        <p className='text-secondary text-base'>Download</p>
                    </div>
                </div>
                <button className='btn btn-primary text-white'>
                    <FaArrowRight className='text-lg cursor-pointer'></FaArrowRight>
                </button>
            </div>
            <div className='flex items-center justify-between mt-6'>
                <div className='flex items-center'>
                    <HiOutlineDocumentChartBar className='text-4xl mr-4'></HiOutlineDocumentChartBar>
                    <div>
                        <h4 className='text-lg font-semibold'>Company Details</h4>
                        <p className='text-secondary text-base'>Download</p>
                    </div>
                </div>
                <button className='btn btn-primary text-white'>
                    <FaArrowRight className='text-lg cursor-pointer'></FaArrowRight>
                </button>
            </div>
        </div>
    );
};

export default Download;