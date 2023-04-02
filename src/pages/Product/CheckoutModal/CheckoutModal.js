import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const CheckoutModal = ({ checkoutModal, totalPrice }) => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <input type="checkbox" id="checkout-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="checkout-modal" className="btn btn-primary btn-md btn-circle absolute right-2 top-2 text-white">✕</label>
                    <div className='rounded-xl' style={{ backgroundColor: '#F3F3F3' }}>
                        <form onSubmit={handleSubmit} className="card-body px-4 md:px-8 lg:px-8">
                            <div className='grid grid-cols-1 gap-2'>
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
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;