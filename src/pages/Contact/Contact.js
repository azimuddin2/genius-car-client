import React from 'react';
import contact from '../../assets/images/contact/contact-us.gif';

const Contact = () => {
    return (
        <section className='my-10'>
            <div className="hero">
                <div className="hero-content grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <img src={contact} alt="Login" className='w-full lg:w-4/5' />
                    </div>
                    <div className="card border py-12">
                        <h1 className="text-4xl font-semibold text-center">Contact Us</h1>
                        <form className="card-body px-4 md:px-10 lg:px-10">
                            <div className="form-control mb-2">
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Your email"
                                    className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="form-control mb-2">
                                <input
                                    name='subject'
                                    type="text"
                                    placeholder="Your subject"
                                    className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <textarea rows='5' className="textarea textarea-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;