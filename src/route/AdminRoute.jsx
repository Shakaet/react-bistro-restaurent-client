import React, { useContext } from 'react';
import { AuthContext } from '../Provider';
import UseAdmin from '../hook/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {


    let {user,loading}= useContext(AuthContext)
    let [isAdmin,adminLoading]= UseAdmin()


             let location= useLocation()

    if(loading || adminLoading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isAdmin){
        return children
    }


    return <Navigate  to={"/"} state={{from:location}} replace></Navigate>
   
};

export default AdminRoute;