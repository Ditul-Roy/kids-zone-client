import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../../shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../../AuthProvideer/AuthProvider';

const LogIn = () => {
    const {loggedUserWithEmail} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loggedUserWithEmail(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from)
            form.reset();
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-6 bg-base-100">
                        <h1 className="text-5xl ms-4 font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-warning' type="submit" value="login" />
                            </div> 
                            <SocialLogin></SocialLogin>
                        </form>
                        <p>new to ! please <Link to='/signup' className='underline'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;