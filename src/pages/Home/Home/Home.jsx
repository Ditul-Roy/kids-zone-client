import React from 'react';
import Banner from '../Banner/Banner';
import Tabs from '../Tabs/Tabs';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabs></Tabs>
        </div>
    );
};

export default Home;