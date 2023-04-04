import React from 'react';
import useCart from '../../../hooks/useCart';
import CartCalculation from '../CartCalculation/CartCalculation';
import CartProduct from '../CartProduct/CartProduct';
import addToCartImg from '../../../assets/images/order/add-to-cart.gif';
import useTitle from '../../../hooks/useTitle';

const Cart = () => {
    useTitle('Product Cart');
    const [cart] = useCart();

    return (
        <section className='px-4 lg:py-4 mb-8'>
            {
                cart.length > 0 ?
                    <>
                        <div className='lg:px-44 '>
                            {
                                cart.map(product => <CartProduct
                                    key={product._id}
                                    product={product}
                                ></CartProduct>)
                            }
                        </div>
                        <div className='lg:px-16'>
                            <CartCalculation cart={cart}></CartCalculation>
                        </div>
                    </>
                    :
                    < img src={addToCartImg} alt="" className='mx-auto' />
            }
        </section>
    );
};

export default Cart;