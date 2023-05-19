import React, { useEffect, useState } from 'react';
import UpcommingData from '../UpcommingData/UpcommingData';

const Relesed = () => {
    const [upcommings, setUpcommings] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/others')
        .then(response => response.json())
        .then(data => setUpcommings(data))
    }, [])

    return (
        <div>
            <p className='text-green-600 text-xl text-center'>upcomming</p>
            <h1  className='text-4xl text-bold text-center text-gray-800 '>Our upcomming relesed toy</h1>
            <div className='grid lg:grid-cols-4 ms-4'>
                {
                    upcommings.map(upcomming => <UpcommingData
                    key={upcomming._id}
                    upcomming={upcomming}
                    ></UpcommingData>)
                }
            </div>
            <div className='text-center my-4'>
                <button className='btn'>see more</button>
            </div>
        </div>
    );
};

export default Relesed;