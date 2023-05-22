import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const TruckTab = ({ truck }) => {
    const { _id, name, img, price, rating } = truck;
    return (
        <div className="card w-96 mx-auto my-10 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-60 w-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <div className='flex text-green-800 my-4'>
                    <p className='text-xl me-4 mt-2'>Ratings :{rating}</p>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                </div>
                <div className="card-actions">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">view Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TruckTab;