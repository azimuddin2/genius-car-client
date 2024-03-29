import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useCart from '../../../hooks/useCart';
import CustomLink from './CustomLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const navOptions = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/about'>About</CustomLink></li>
        <li><CustomLink to='/products'>Products</CustomLink></li>
        <li><CustomLink to='/contact'>Contact</CustomLink></li>
        <li>
            {
                user?.uid ?
                    <>
                        <CustomLink to='/order'>Order</CustomLink>
                        <button onClick={handleLogOut}>Logout</button>
                    </>
                    :
                    <CustomLink to='/login'>Login</CustomLink>
            }
        </li>
    </>

    return (
        <div className="navbar bg-base-100 py-4 lg:px-8 print:hidden">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80 font-semibold">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">
                    <img className='w-14 lg:w-24' src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/cart">
                    <div className="indicator cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item bg-primary border-none text-white">{cart.length}</span>
                    </div>
                </Link>
                <Link
                    to="/services"
                    className="btn btn-sm lg:btn-md rounded lg:rounded-lg btn-outline btn-primary ml-5 capitalize"
                >
                    Appointment
                </Link>
            </div>
        </div>
    );
};

export default Header;