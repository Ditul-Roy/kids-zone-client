import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={'https://i.ibb.co/b5M9SXJ/oops-404-error-with-broken-robot-concept-illustration-114360-1932.jpg'} alt="" />
            <h1 className='text-6xl'>Oooops!</h1>
            <p className='text-3xl text-blue-600'>page not found</p>
            <Link className='btn btn-primary my-10' to='/'>back to home</Link>
        </div>
    );
};

export default ErrorPage;