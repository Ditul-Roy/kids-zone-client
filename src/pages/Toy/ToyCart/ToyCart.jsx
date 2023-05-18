import React from 'react';

const ToyCart = ({ toy }) => {
    console.log(toy);
    const { img, name, price, quantity } = toy;
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-20">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td><div className="font-bold">{name}</div></td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ToyCart;