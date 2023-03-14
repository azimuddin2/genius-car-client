import React from 'react';
import useCart from '../../../hooks/useCart';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
    const [cart] = useCart();

    return (
        <section className='px-4 lg:px-8 lg:py-4 mb-8' style={{backgroundColor: '#f6f5fa87'}}>
            <div className='p-16 rounded-xl'>
                {
                    cart.map(product => <CartProduct
                        key={product._id}
                        product={product}
                    ></CartProduct>)
                }
            </div>
            <div>

            </div>
        </section>
    );
};

export default Cart;