import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <section>
            <div className='text-center'>
                <p className='text-primary font-bold text-lg'>Popular Products</p>
                <h1 className='font-bold text-4xl leading-snug text-accent'>Browse Our Products</h1>
                <p className='lg:w-1/2 mx-auto text-secondary leading-7 mt-3 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-primary btn-outline capitalize font-semibold">More Products</button>
            </div>
        </section>
    );
};

export default Products;