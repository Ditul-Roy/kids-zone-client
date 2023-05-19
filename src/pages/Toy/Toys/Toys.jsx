import React, { useEffect, useState } from 'react';
import ToyCart from '../ToyCart/ToyCart';

const Toys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            <div className=" w-full my-10">
                <div className='flex justify-end'>
                    <input type="text" placeholder="Search" className="input input-bordered" />
                    <input type="submit" value="serch" className='btn btn-ghost' />
                </div>
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className='py-8'>
                            <th></th>
                            <th className='hover:bg-gray-400 p-4 rounded hover:text-white'>Name</th>
                            <th className='hover:bg-gray-400 p-4 rounded hover:text-white'>Seller</th>
                            <th className='hover:bg-gray-400 p-4 rounded hover:text-white'>Price</th>
                            <th className='hover:bg-gray-400 p-4 rounded hover:text-white'>Quantity</th>
                            <th className='hover:bg-gray-400 p-4 rounded hover:text-white'>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            toys.map(toy => <ToyCart
                                key={toy._id}
                                toy={toy}
                            >
                            </ToyCart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Toys;