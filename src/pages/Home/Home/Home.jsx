import React from 'react';
import Banner from '../Banner/Banner';
import Tabs from '../Tabs/Tabs';

const Home = () => {
    return (
        <div>
            <h1 className='text- 3xl underline'>this is home </h1>
            <Banner></Banner>
            <Tabs></Tabs>
        </div>
    );
};

export default Home;