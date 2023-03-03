import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-4 lg:px-8'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Information></Information>
        </div>
    );
};

export default Home;