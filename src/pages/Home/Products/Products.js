import React from 'react';
import { Zoom } from 'react-reveal';
import { useProducts } from '../../../contexts/ProductProvider/ProductProvider';
import Loading from '../../Shared/Loading/Loading';
import Product from './Product';

const Products = () => {
    const {
        state: { products, loading, error }
    } = useProducts();

    let content;

    if (loading) {
        content = <Loading></Loading>
    }

    if (error) {
        content = <p className='text-primary text-center'>error: something went wrong</p>
    }

    if (!loading && !error && products.length) {
        content = products.map(product => <Product
            key={product._id}
            product={product}
        ></Product>)
    }

    return (
        <section>
            <Zoom left>
                <div className='text-center'>
                    <p className='text-primary font-bold text-lg'>Popular Products</p>
                    <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-accent'>Browse Our Products</h1>
                    <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
                </div>
            </Zoom>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12'>
                {
                    content
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-primary btn-outline capitalize font-semibold">More Products</button>
            </div>
        </section>
    );
};

export default Products;