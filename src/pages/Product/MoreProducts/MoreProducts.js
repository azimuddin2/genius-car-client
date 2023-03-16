import React from 'react';
import { Zoom } from 'react-reveal';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Home/Products/Product';

const MoreProducts = () => {
    const [products] = useProducts();

    return (
        <section className='px-4 lg:px-8'>
            <Zoom left>
                <div className='text-center'>
                    <p className='text-primary font-bold text-lg'>Popular Products</p>
                    <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-accent'>Browse Our Products</h1>
                    <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
                </div>
            </Zoom>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-12 pb-16'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </section>
    );
};

export default MoreProducts;