import React, { useState } from 'react';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

const CartCalculation = ({ cart }) => {
    const [checkoutModal, setCheckoutModal] = useState(null);

    let subtotal = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        subtotal = subtotal + parseFloat(product.price) * product.quantity;
    };

    const shipping = parseFloat((subtotal * 10 / 100));
    const total = subtotal + shipping;


    return (
        <div className='bg-white p-10 w-full rounded-lg' style={{ backgroundColor: '#F3F3F3' }}>
            <h1 className='font-semibold text-3xl mb-2'>Order Summary</h1>
            <h2 className='text-lg font-medium'>Select Items: {quantity}</h2>
            <p className='text-lg font-medium'>Subtotal Price: ${subtotal}</p>
            <p className='text-lg font-medium'>Shipping: ${shipping}</p>
            <h2 className='text-xl font-semibold'>Total Price: ${total.toFixed(2)}</h2>
            <div className='flex justify-end'>
                <label
                    onClick={() => setCheckoutModal(cart)}
                    htmlFor="checkout-modal"
                    className="btn btn-primary text-white capitalize mt-5"
                >
                    Proceed Checkout
                </label>
            </div>
            {
                checkoutModal && <CheckoutModal
                    checkoutModal={checkoutModal}
                    totalPrice={total}
                ></CheckoutModal>
            }
        </div>
    );
};

export default CartCalculation;