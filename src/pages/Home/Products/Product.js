import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Fade } from 'react-reveal';
import useCart from '../../../hooks/useCart';
import { addToDb } from '../../../utilities/storageDB';
import './Product.css';

const Product = ({ product }) => {
    const { image, title, price } = product;
    const [cart, setCart] = useCart();

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    };

    return (
        <div>
            <Fade bottom>
                <div className="card h-96 bg-base-100 px-5 pt-6 border hover:border-none hover:shadow-xl">
                    <figure style={{ backgroundColor: '#F3F3F3' }} className="rounded-xl">
                        <img src={image} alt={title} className="rounded-xl w-36 py-10" />
                        <div className='flex items-center justify-center bg-white w-8 h-8 rounded-md mb-28 cursor-pointer icon'>
                            <MdOutlineShoppingCart
                                onClick={() => handleAddToCart(product)}
                                className='text-center text-primary text-2xl'
                            ></MdOutlineShoppingCart>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        </div>
                        <h2 className="card-title font-bold text-2xl text-neutral">{title}</h2>
                        <p className='text-primary font-semibold text-xl'>${price}</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Product;