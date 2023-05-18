import React from 'react';
import { Link } from 'react-router-dom';

const MyCarCart = ({ userCar, handleDeleteCar }) => {
    // console.log(userCar);
    
    const { _id, img, name, price, quantity } = userCar;
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>
                <h1>{quantity}</h1>
            </td>
            <td>{price}</td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">u</button></Link>
                <button onClick={(()=>handleDeleteCar(_id))} className="btn btn-ghost btn-xs">d</button>
            </th>
        </tr >
    );
};

export default MyCarCart;