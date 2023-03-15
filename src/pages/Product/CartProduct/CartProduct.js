import React from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { RiDeleteBinLine } from 'react-icons/ri';
import './CartProduct.css';

const CartProduct = ({ product }) => {
    const { image, title, price, quantity } = product;

    return (
        <div className="card card-side border p-2 mb-5 bg-white">
            <figure style={{ backgroundColor: '#F3F3F3' }} className="rounded-lg w-48">
                <img src={image} alt={title} className="rounded-lg w-100 lg:w-36 py-10" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl lg:text-2xl">{title}</h2>
                <p className='text-lg lg:text-xl font-semibold'>Price: <span className='text-primary'>${price}</span></p>
                <div className='flex items-center mt-2'>
                    <button className='remove-btn'>
                        <IoMdRemove
                            className='text-4xl font-bold'
                        ></IoMdRemove>
                    </button>
                    <span className='quantity'>{quantity}</span>
                    <button className='add-btn'>
                        <IoMdAdd
                            className='text-4xl font-bold'
                        ></IoMdAdd>
                    </button>
                </div>
                <div className="card-actions justify-end">
                    <RiDeleteBinLine
                        className='text-4xl text-primary cursor-pointer'
                    ></RiDeleteBinLine>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;