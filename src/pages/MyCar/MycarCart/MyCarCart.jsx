import React from 'react';

const MyCarCart = ({ userCar }) => {
    console.log(userCar);
    const { img, name, price, quantity } = userCar;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr >
    );
};

export default MyCarCart;