import React from 'react';
import { toast } from 'react-hot-toast';
import { Fade, Zoom } from 'react-reveal';
import contact from '../../assets/images/contact/contact-us.svg';
import useTitle from '../../hooks/useTitle';

const Contact = () => {
    useTitle('Contact');
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        console.log(email, subject, message);
        form.reset();
        toast.success('Form submit successful.');
    };

    return (
        <section className='my-12'>
            <div className="hero">
                <div className="hero-content grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-20">
                    <Zoom top>
                        <div className="text-center lg:text-left">
                            <img src={contact} alt="Login" className='w-full ' />
                        </div>
                    </Zoom>
                    <Fade bottom>
                        <div className="card border pb-4 pt-12">
                            <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
                            <form onSubmit={handleSubmit} className="card-body px-4 md:px-8 lg:px-8">
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
                                    <textarea
                                        name='message'
                                        rows='5'
                                        placeholder="Your message"
                                        className="textarea textarea-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Submit</button>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Contact;