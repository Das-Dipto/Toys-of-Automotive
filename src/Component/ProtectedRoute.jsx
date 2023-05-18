import React from 'react'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
       return <h1>Loading</h1>
    }

    if(!user){
        return <Navigate state={{from: location}} to="/login" replace/>
    }

    return children;
}

export default ProtectedRoute