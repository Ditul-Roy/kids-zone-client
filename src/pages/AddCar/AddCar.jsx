import React from 'react';

const AddCar = () => {
    return (
        <div className='my-10 bg-gray-200'>
            <h3 className='text-center text-6xl text-slate-600 py-8 px-4'>Please Add some car toys for your sell </h3>
            <div className="">
                <div className=" ">
                    <div className=" w-full">
                        <div className="card-body">
                            <div className='grid grid-cols-2'>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Cetegory</span>
                                    </label>
                                    <input type="text" placeholder="category" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="price" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="rating" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Avilable Quantity</span>
                                    </label>
                                    <input type="text" placeholder="quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details </span>
                                    </label>
                                    <input type="text" placeholder="details" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl </span>
                                </label>
                                <input type="text" placeholder="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">add a car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCar;