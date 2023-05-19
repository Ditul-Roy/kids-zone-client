import React, { useEffect, useState } from 'react';
import SportsTab from '../SportsTab/SportsTab';
import TruckTab from '../TruckTab/TruckTab';
import BusTab from './BusTab/BusTab';

const Tabs = () => {
    const [toggle, settoggle] = useState(1);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleUpdateToggle = (id) => {
        settoggle(id)
    }
    return (
        <div className='border-slate-900 border-2 rounded my-8'>
            <h2 className='text-4xl text-gray-600 text-center my-4'>Our Car toys for your child</h2>
            <p className='text-center text-xl text-green-700 mb-4'>If you went to buy some cars. please visit our shop.</p>
            <div>
                <ul className='flex justify-end bg-gray-200 px-8 py-4'>
                    <li className='me-10 text-gray-400 text-xl hover:bg-gray-400 hover:text-white p-2 rounded '><button onClick={() => handleUpdateToggle(1)}>Sports car</button></li>
                    <li className='me-10 text-gray-400 text-xl hover:bg-gray-400 hover:text-white p-2 rounded '> <button onClick={() => handleUpdateToggle(2)}>Truck</button></li>
                    <li className='me-10 text-gray-400 text-xl hover:bg-gray-400 hover:text-white p-2 rounded '><button onClick={() => handleUpdateToggle(3)}>Bus</button></li>
                </ul>
            </div>
            <div className={toggle === 1 ? 'block' : 'hidden'}>
                <h1 className='text-2xl text-center text-bold'>Sports car</h1>
                <div className='grid lg:grid-cols-2'>
                    {
                        cars.slice(0, 2).map(scar => <SportsTab
                            key={scar._id}
                            scar={scar}
                        ></SportsTab>)
                    }
                </div>

            </div>
            <div className={toggle === 2 ? 'block' : 'hidden'}>
                <h2 className='text-2xl text-center text-bold'>truck</h2>
                <div className='grid lg:grid-cols-2'>
                    {
                        cars.slice(4, 6).map(truck => <TruckTab
                            key={truck._id}
                            truck={truck}
                        ></TruckTab>)
                    }
                </div>
            </div>
            <div className={toggle === 3 ? 'block' : 'hidden'}>
                <h3 className='text-2xl text-center text-bold'>bus</h3>
                <div className='grid lg:grid-cols-2'>
                    {
                        cars.slice(7, 9).map(bus => <BusTab
                        key={bus._id}
                        bus={bus}
                        ></BusTab>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tabs;