import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Information from '../Information/Information';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div className='px-4 lg:px-8'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Information></Information>
            <Products></Products>
            <Teams></Teams>
            <Features></Features>
        </div>
    );
};

export default Home;