import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useTitleBar from '../../shared/TitleBar/UseTitleBar';

const AddCar = () => {
    const navigate = useNavigate();
    useTitleBar('add cart')

    const handleAddToCar = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.car_name.value;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const img = form.img.value;
        const newCar = {name, seller_name, email, category, price, rating, quantity, details, img};
        console.log(newCar);

        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            alert('new car added')
            navigate('/')
            
            
        })
    }

    return (
        <div className='my-10 bg-gray-200'>
            <h3 className='text-center text-6xl text-slate-600 py-8 px-4'>Please Add some car toys for your sell </h3>
            <div className="">
                <div className=" ">
                    <div className=" w-full">
                        <form onSubmit={handleAddToCar} className="card-body">
                            <div className='grid grid-cols-2'>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='car_name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller name</span>
                                    </label>
                                    <input type="text" placeholder="sellerName" name='seller_name' className="input input-bordered" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Cetegory</span>
                                    </label>
                                    <input type="text" placeholder="category" name='category' className="input input-bordered" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="price" name='price' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="rating" name='rating' className="input input-bordered" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl </span>
                                </label>
                                <input type="text" placeholder="photo" name='img' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="add a toy" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCar;