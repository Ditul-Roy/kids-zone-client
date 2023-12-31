import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitleBar from '../../../shared/TitleBar/UseTitleBar';
import Swal from 'sweetalert2';

const UpdateCar = () => {
    const carstoy = useLoaderData();
    console.log(carstoy);
    const { _id, price, quantity, details } = carstoy;
    useTitleBar('update car')

    const handleUpdateCar = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const update = { price, quantity, details };
        fetch(`https://toy-server-six.vercel.app/allcars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'success!',
                    text: 'Updated succesfully ',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdateCar}>
                <div className="form-control me-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="price" name='price' defaultValue={price} className="input input-bordered" />
                </div>
                <div className="form-control me-4">
                    <label className="label">
                        <span className="label-text">Avilable Quantity</span>
                    </label>
                    <input type="text" placeholder="quantity" name='quantity' defaultValue={quantity} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details </span>
                    </label>
                    <input type="text" name='details' defaultValue={details} className="input input-bordered" />
                </div>
                <div className="form-control my-6">
                    <input type="submit" value="update" className="btn btn-ghost" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCar;