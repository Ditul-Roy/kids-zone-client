import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import Relesed from '../Relesed/Relesed';
import useTitleBar from '../../../shared/TitleBar/UseTitleBar';
import Tabs from '../Tabs/Tabs/Tabs';

const Home = () => {
    useTitleBar('home')
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