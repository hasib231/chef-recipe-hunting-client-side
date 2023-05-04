import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from './../.firebase/firebase.config';

export const AuthContex = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const user = {name: "hasib"}
    const authInfo = {
        user
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;