import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCar = () => {
    const cars = useLoaderData();
    console.log(cars);
    return (
        <div>
            <form>
                <div className="form-control me-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="price" name='price' className="input input-bordered" />
                </div>
                <div className="form-control me-4">
                    <label className="label">
                        <span className="label-text">Avilable Quantity</span>
                    </label>
                    <input type="text" placeholder="quantity" name='quantity' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details </span>
                    </label>
                    <input type="text" placeholder="details" name='details' className="input input-bordered" />
                </div>
                <input type="submit" value="update" className="btn btn-ghost btn-xs" />
            </form>
        </div>
    );
};

export default UpdateCar;