import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvideer/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    else{
        Swal.fire({
            title: 'Warning!',
            text: 'You have to log in first to add this item login',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
     return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    
};

export default PrivateRoutes;