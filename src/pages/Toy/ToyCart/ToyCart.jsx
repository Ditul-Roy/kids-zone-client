import React from 'react';
import { Link } from 'react-router-dom';

const ToyCart = ({ toy }) => {
    // console.log(toy);
    const {_id, seller_name, img, name, price, quantity } = toy;
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
            <td>{seller_name ? seller_name : 'unwkown'}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default ToyCart;