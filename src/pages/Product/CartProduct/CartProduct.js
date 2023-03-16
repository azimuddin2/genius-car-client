import React, { useState } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { RiDeleteBinLine } from 'react-icons/ri';
import useCart from '../../../hooks/useCart';
import { addToDb, removeFromDb, removeFromDbQuantity } from '../../../utilities/storageDB';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import './CartProduct.css';

const CartProduct = ({ product }) => {
    const [cart, setCart] = useCart();
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { image, title, price, quantity } = product;
    const newPrice = price * quantity;

    const handleAddQuantity = (selectedProduct) => {
        let newQuantity = selectedProduct.quantity;
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (exists) {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newQuantity = [...rest, exists];
        }

        setCart(newQuantity);
        addToDb(selectedProduct._id);
    };

    const handleRemoveQuantity = (selectedProduct) => {
        let newQuantity = selectedProduct.quantity;
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (exists > 1) {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity - 1;
            newQuantity = [...rest, exists];
        }

        setCart(newQuantity);
        removeFromDbQuantity(selectedProduct._id);
    };

    const handleCloseModal = () => {
        setDeleteProduct(null);
    };

    const handleDeleteProduct = (selectedProduct) => {
        const rest = cart.filter(product => product._id !== selectedProduct._id);
        setCart(rest);
        removeFromDb(selectedProduct._id);
    }

    return (
        <div className="card card-side border p-2 mb-5 bg-white">
            <figure style={{ backgroundColor: '#F3F3F3' }} className="rounded-lg w-48">
                <img src={image} alt={title} className="rounded-lg w-100 lg:w-36 py-10" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl lg:text-2xl">{title}</h2>
                <p className='text-lg lg:text-xl font-semibold'>Price: <span className='text-primary'>${newPrice}</span></p>
                <div className='flex items-center mt-2'>
                    <button className='remove-btn'>
                        <IoMdRemove
                            onClick={() => handleRemoveQuantity(product)}
                            className='text-3xl font-bold'
                        ></IoMdRemove>
                    </button>
                    <span className='quantity'>{quantity}</span>
                    <button className='add-btn'>
                        <IoMdAdd
                            onClick={() => handleAddQuantity(product)}
                            className='text-3xl font-bold'
                        ></IoMdAdd>
                    </button>
                </div>
                <div className="card-actions justify-end">
                    <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal">
                        <RiDeleteBinLine
                            className='text-4xl text-primary cursor-pointer'
                        ></RiDeleteBinLine>
                    </label>
                </div>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    modalData={product}
                    successModal={handleDeleteProduct}
                    closeModal={handleCloseModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default CartProduct;