import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../../shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../../AuthProvideer/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitleBar from '../../../shared/TitleBar/UseTitleBar';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUerWithEmail} = useContext(AuthContext);
    useTitleBar('signup')
    const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUerWithEmail(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'success!',
                text: 'Wow! Good job ',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            form.reset();
            updateUser(result.user, name, photo)
        })
        .catch(error =>{
            const err = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: err
              })
        })
    }

    const updateUser = (user, name, photo) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(result => {
            alert('succelfully updated')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-6 bg-base-100">
                        <h1 className="text-5xl ms-4 font-bold">Signup now!</h1>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="photo" name='photo' className="input input-bordered" />
                            </div>
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
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-warning' value="signup" />
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                        <p>Already have an account ! please <Link to='/login' className='underline'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;