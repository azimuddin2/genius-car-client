import React from 'react';
import logo from '../../../assets/logo.png';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-gray-200 py-20">
            <div>
                <img src={logo} alt="Logo" />
                <p className='mt-3'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial.</p>
                <div className='flex items-center mt-4'>
                    <p className='bg-neutral-800 mr-2 p-3 rounded-full cursor-pointer'><FaGoogle ></FaGoogle></p>
                    <p className='bg-neutral-800 mr-2 p-3 rounded-full cursor-pointer'><FaTwitter></FaTwitter></p>
                    <p className='bg-neutral-800 mr-2 p-3 rounded-full cursor-pointer'><FaInstagram></FaInstagram></p>
                    <p className='bg-neutral-800 mr-2 p-3 rounded-full cursor-pointer'><FaLinkedin></FaLinkedin></p>
                </div>
            </div>
            <div>
                <span className="footer-title text-slate-100">About</span>
                <a href="/" className="link link-hover">Home</a>
                <a href="/" className="link link-hover">Service</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">Why Car Doctor</a>
                <a href="/" className="link link-hover">About</a>
                <a href="/" className="link link-hover">Blog</a>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a href="/" className="link link-hover">Support Center</a>
                <a href="/" className="link link-hover">Feedback</a>
                <a href="/" className="link link-hover">Accessibility</a>
            </div>
        </footer>
    );
};

export default Footer;