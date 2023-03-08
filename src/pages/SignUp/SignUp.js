import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';

const SignUp = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
    };

    return (
        <section className='my-10'>
            <div className="hero">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="Login" className='w-full lg:w-4/5' />
                    </div>
                    <div className="card border py-12">
                        <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="card-body px-4 lg:px-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-neutral text-lg">Name</span>
                                </label>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-neutral text-lg">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Your email"
                                    className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-neutral text-lg">Password</span>
                                </label>
                                <input
                                    name='password'
                                    type="password"
                                    placeholder="Your password"
                                    className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Sign up</button>
                            </div>
                        </form>
                        <p className='text-center text-base'>Already have an account? <Link to='/login' className='text-primary font-semibold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;