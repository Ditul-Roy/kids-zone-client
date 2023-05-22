import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvideer/AuthProvider';
import MyCarCart from '../MycarCart/MyCarCart';
import useTitleBar from '../../../shared/TitleBar/UseTitleBar';
import Swal from 'sweetalert2';

const MyCar = () => {
    const { user } = useContext(AuthContext);
    const [userCars, setUserCars] = useState([]);
    useTitleBar('my car')

    useEffect(() => {
        fetch(`https://toy-server-six.vercel.app/onlycars?email=${user.email}`)
            .then(response => response.json())
            .then(data => {
                setUserCars(data)
                // console.log(data);
            })
    }, []);

    const handleDeleteCar = (id) => {
        const deleted = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        if (deleted) {
            fetch(`https://toy-server-six.vercel.app/allcars/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    });
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remainingCars = userCars.filter(car => car._id !== id);
                        setUserCars(remainingCars)
                    }

        }
    }

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