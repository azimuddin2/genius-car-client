import React from 'react';
import { useProducts } from '../../../contexts/ProductProvider/ProductProvider';
import Loading from '../../Shared/Loading/Loading';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
    const {
        state: { cart, loading, error }
    } = useProducts();

    let content;

    if (loading) {
        content = <Loading></Loading>
    }

    if (error) {
        content = <p className='text-primary text-center'>error: something went wrong</p>
    }

    if (!loading && !error && cart.length) {
        content = cart.map(product => <CartProduct
            key={product._id}
            product={product}
        ></CartProduct>)
    }

    return (
        <section className='px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20'>
            <div>
                {
                    content
                }
            </div>
            <div>
                <h1>Order summary</h1>
            </div>
        </section>
    );
};

export default Cart;