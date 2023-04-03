import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkout from '../../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, price, img } = service;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email;
        const currency = form.currency.value;
        const postcode = form.postcode.value;
        const address = form.address.value;

        const order = {
            title,
            img,
            price,
            customer: name,
            email,
            phone,
            currency,
            postcode,
            address
        };

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url);
            })
            .catch(error => console.error(error))
    };

    return (
        <section className='px-4 lg:px-8 lg:py-4 '>
            {/* checkout banner */}
            <div className='mb-8 lg:mb-16 w-full relative'>
                <div className='service-details-img'>
                    <img className='w-full h-full' src={checkout} alt="" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-4 lg:left-20 lg:h-48 top-1/3 lg:top-3/4">
                    <h1 className='text-2xl lg:text-4xl text-white font-semibold leading-none'>You are about to order: {title}</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-4 lg:left-20 lg:h-48 top-3/4 lg:top-full">
                    <h1 className='text-2xl lg:text-4xl text-white font-semibold'>Price: <span className='text-primary'>${price}</span></h1>
                </div>
            </div>
            {/* order form */}
            <div className='rounded-xl lg:p-12 mb-16' style={{ backgroundColor: '#F3F3F3' }}>
                <form onSubmit={handleSubmit} className="card-body px-4 md:px-8 lg:px-8">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="form-control mb-2">
                            <input
                                name='firstName'
                                type="text"
                                placeholder="First Name"
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                name='lastName'
                                type="text"
                                placeholder="Last Name"
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                name='phone'
                                type="text"
                                placeholder="Your Phone"
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                defaultValue={user?.email}
                                disabled
                                name='email'
                                type="email"
                                className="input"
                            />
                        </div>
                        <div className="form-control mb-2">
                            <select
                                defaultValue='BDT'
                                name='currency'
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option value="BDT">BDT</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <div className="form-control mb-2">
                            <input
                                name='postcode'
                                type="text"
                                placeholder="Your Post Code"
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea
                            name='address'
                            rows='5'
                            placeholder="Your Address"
                            className="textarea focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white capitalize">PAY</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;