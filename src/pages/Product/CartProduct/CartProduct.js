import React from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const CartProduct = ({ product }) => {
    const { image, title, price } = product;

    return (
        <div className="card card-side border p-2 mb-5">
            <figure style={{ backgroundColor: '#F3F3F3' }} className="rounded-lg w-48">
                <img src={image} alt={title} className="rounded-lg w-36 py-10" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: ${price}</p>
                <div className='flex items-center'>
                    <button className='text-white w-10 h-10 rounded-full bg-red-200'>
                        <IoMdRemove className='text-3xl font-bold'></IoMdRemove>
                    </button>
                    <span className='w-12 h-10 bg-zinc-400 text-3xl rounded-xl'>1</span>
                    <button className='text-white w-10 h-10 rounded-full bg-yellow-200'>
                        <IoMdAdd className='text-3xl font-bold'></IoMdAdd>
                    </button>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;