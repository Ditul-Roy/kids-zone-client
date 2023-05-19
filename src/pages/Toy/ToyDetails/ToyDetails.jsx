import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const carDetails = useLoaderData();
    console.log(carDetails);
    const { img, name, seller_name, price, rating, details, category, quantity } = carDetails;
    return (
        <div className=" flex bg-slate-200 shadow-xl my-20 p-10 rounded">
            <figure><img className='h-96 w-96 me-10 rouneded' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy name: {name}</h2>
                <p className='text-3xl text-bold'>Seller name: {seller_name}</p>
                <p className='text-green-600'>Category: {category}</p>
                <p className='text-xl'>{details}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <div className='flex justify-between card-actions'>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;