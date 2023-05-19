import React from 'react';
import Banner from '../Banner/Banner';
import Tabs from '../Tabs/Tabs';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import Relesed from '../Relesed/Relesed';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabs></Tabs>
            <About></About>
            <Relesed></Relesed>
        </div>
    );
};

export default Home;