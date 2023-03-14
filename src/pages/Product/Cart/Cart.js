import React from 'react';
import useCart from '../../../hooks/useCart';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
    const [cart] = useCart();

    return (
        <div>
            {
                cart.map(product => <CartProduct
                    key={product._id}
                    product={product}
                ></CartProduct>)
            }
        </div>
    );
};

export default Cart;