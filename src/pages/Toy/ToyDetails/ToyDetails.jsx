import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const carDetails = useLoaderData();
    console.log(carDetails);
    return (
        <div>
            this is toy
        </div>
    );
};

export default ToyDetails;