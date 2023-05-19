import React from 'react';

const UpcommingData = ({ upcomming }) => {
    const { img, name, details } = upcomming;
    return (
        <div className="card me-4 my-10 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className=" w-96 h-60 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default UpcommingData;