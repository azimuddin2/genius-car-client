import React from 'react';

const CartCalculation = ({ cart }) => {

    let subtotal = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        subtotal = subtotal + parseFloat(product.price) * product.quantity;
    };

    const shipping = parseFloat((subtotal * 10 / 100));
    const total = subtotal + shipping;


    return (
        <div className='bg-white'>
            <h2>Select Items: {quantity}</h2>
            <p>Subtotal Price: ${subtotal}</p>
            <p>Shipping: ${shipping}</p>
            <h2>Total Price: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default CartCalculation;