import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvideer/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }
    return (
        <div>
            <div className="navbar bg-emerald-400 p-4 rounded">
                <div className="navbar-start">
                    <img className='h-12 w-10' src={'https://i.ibb.co/C0wnfmh/images-q-tbn-ANd9-Gc-Tn-Bsjyi-Y02-QEzd-HK-j-Qw2zw-O8-CVWYi-Rkcjy-Q-usqp-CAU.jpg'} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">KidsZone</Link>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-xl text-slate-800'><NavLink to='/'>Home</NavLink></li>
                        <li className='text-xl text-slate-800'><NavLink to='/toys'>All cars</NavLink></li>
                        <li className='text-xl text-slate-800'><NavLink to='/blog'>blog</NavLink></li>
                        {
                            user ? <>
                                <li className='text-xl text-slate-800'><NavLink to='/mycar'>My cars</NavLink></li>
                                <li className='text-xl text-slate-800'><NavLink to='/addcar'>Add cars</NavLink></li>
                                <img className='h-12 w-12' src={user.photoURL} title={user.displayName} alt="" />
                                <li><button onClick={handleLogout} className='btn text-white'>LogOut</button></li>
                            </> :  <Link className='btn lg:ms-80' to='/login'>Log in</Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;