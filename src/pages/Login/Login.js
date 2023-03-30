import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Fade, Zoom } from 'react-reveal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    const { signIn, setLoading } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return (
        <section className='my-10'>
            <div className="hero">
                <div className="hero-content grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <Zoom top>
                        <div className="text-center lg:text-left">
                            <img src={login} alt="Login" className='w-full lg:w-4/5' />
                        </div>
                    </Zoom>
                    <Fade bottom>
                        <div className="card border py-12">
                            <h1 className="text-4xl font-semibold text-center">Login</h1>
                            <form onSubmit={handleSubmit} className="card-body px-4 md:px-10 lg:px-10">
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
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Your password"
                                        className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                    <p className='m-12 login-show-password'
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {
                                            showPassword ?
                                                <FaEyeSlash className='text-gray-400'></FaEyeSlash>
                                                :
                                                <FaEye className='text-gray-400'></FaEye>
                                        }
                                    </p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Login</button>
                                </div>
                            </form>
                            <p className='text-center text-neutral font-medium text-base'>Or Login with</p>
                            <SocialLogin></SocialLogin>
                            <p className='text-center text-base text-secondary'>New account? <Link to='/signup' className='text-primary font-semibold'>Sign Up</Link></p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Login;