import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvideer/AuthProvider';
import MyCarCart from '../MycarCart/MyCarCart';

const MyCar = () => {
    const { user } = useContext(AuthContext);
    const [userCars, setUserCars] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cars?email=${user.email}`)
            .then(response => response.json())
            .then(data => {
                setUserCars(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userCars.map(userCar => <MyCarCart
                                key={userCar._id}
                                userCar={userCar}
                            ></MyCarCart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCar;