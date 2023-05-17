import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase_config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const user = null;
    const [loading, setLoading] = useState(true);


    const createUerWithEmail = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loggedUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userWithSocialLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const authInfo = {
        user,
        loading,
        createUerWithEmail,
        loggedUserWithEmail,
        userWithSocialLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;