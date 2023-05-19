import React from 'react';
import Banner from '../Banner/Banner';
import Tabs from '../Tabs/Tabs';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabs></Tabs>
            <About></About>
        </div>
    );
};

export default Home;