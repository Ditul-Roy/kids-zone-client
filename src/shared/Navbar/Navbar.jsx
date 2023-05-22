import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvideer/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

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
                <div onClick={()=>setIsOpen(!isOpen)} className='lg:hidden ms-24'>
                    <p>
                        {isOpen === true ? "S": "X"}
                    </p>
                </div>
                <div className="navbar-center lg:flex ">
                    <ul className={`px-1 lg:flex justify-between absolute lg:static duration-500 lg:pt-4  ${isOpen ? 'top-20 ' : '-top-60'}`}>
                        <li><NavLink to='/' className={({ Active }) => (Active ? 'text-blue-400' : ' text-xl lg:me-4')}>Home</NavLink></li>
                         <li><NavLink to='/toys' className={({ Active }) => (Active ? 'text-blue-400' : ' text-xl lg:me-4')}>All cars</NavLink></li>
                        <li><NavLink to='/blog' className={({ Active }) => (Active ? 'text-blue-400' : ' text-xl lg:me-4')}>blog</NavLink></li>
                        {
                            user ? <>
                                <li><NavLink to='/mycar' className={({ Active }) => (Active ? 'text-blue-400' : ' text-xl lg:me-4')}>My cars</NavLink></li>
                                <li><NavLink to='/addcar' className={({ Active }) => (Active ? 'text-blue-400' : ' text-xl lg:me-4')}>Add cars</NavLink></li>
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