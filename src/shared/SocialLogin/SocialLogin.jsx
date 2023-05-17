import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvideer/AuthProvider';

const SocialLogin = () => {
    const {userWithSocialLogin} = useContext(AuthContext);
    
    const handleLoginWithGoogle = () => {
        userWithSocialLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }    
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center text-2xl'>
                <button onClick={handleLoginWithGoogle} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;