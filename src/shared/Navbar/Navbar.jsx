import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-200 p-4 rounded">
                <div className="navbar-start">
                <img className='h-12 w-10' src={'https://i.ibb.co/C0wnfmh/images-q-tbn-ANd9-Gc-Tn-Bsjyi-Y02-QEzd-HK-j-Qw2zw-O8-CVWYi-Rkcjy-Q-usqp-CAU.jpg'} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">KidsZone</Link>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-xl text-slate-800'><Link to='/'>Home</Link></li>
                        <li className='text-xl text-slate-800'><Link to='/'>All cars</Link></li>
                        <li className='text-xl text-slate-800'><Link to='/'>My cars</Link></li>
                        <li className='text-xl text-slate-800'><Link to='/'>A cars</Link></li>
                        <li className='text-xl text-slate-800'><Link to='/'>profile</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='btn' to='/login'>Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;