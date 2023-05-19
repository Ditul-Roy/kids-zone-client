import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvideer/AuthProvider';
import MyCarCart from '../MycarCart/MyCarCart';
import useTitleBar from '../../../shared/TitleBar/UseTitleBar';

const MyCar = () => {
    const { user } = useContext(AuthContext);
    const [userCars, setUserCars] = useState([]);
    useTitleBar('my car')

    useEffect(() => {
        fetch(`http://localhost:5000/cars?email=${user.email}`)
            .then(response => response.json())
            .then(data => {
                setUserCars(data)
                console.log(data);
            })
    }, []);

    const handleDeleteCar = (id) => {
        const deleted = confirm('are you sure! you went to delete this item');
        if (deleted) {
            fetch(`http://localhost:5000/cars/${id}`,{
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert('deleted successfully');
                    if(data.deletedCount > 0){
                        const remainingCars = userCars.filter(car => car._id !== id);
                        setUserCars(remainingCars)
                    }
                })
        }
    }

    // const updatedAddToCar = (id) => {
    //     fetch(`http://localhost:5000/cars/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
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
                                handleDeleteCar={handleDeleteCar}
                            ></MyCarCart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyCar;