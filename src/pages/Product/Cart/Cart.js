import React from 'react';
import { useProducts } from '../../../contexts/ProductProvider/ProductProvider';
import Product from '../../Home/Products/Product';
import Loading from '../../Shared/Loading/Loading';

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
        content = cart.map(product => <Product
            key={product._id}
            product={product}
        ></Product>)
    }

    return (
        <div>
            {
                content
            }
        </div>
    );
};

export default Cart;