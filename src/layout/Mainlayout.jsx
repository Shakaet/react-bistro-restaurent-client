import React from 'react';
import NavBar from '../shared/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';

const Mainlayout = () => {


    let location= useLocation()
    console.log(location)


    let islogin=location.pathname=== "/login"
    let issignUp=location.pathname=== "/signUp"
    return (
        <div>
            {islogin || issignUp || <NavBar></NavBar>}
            <Outlet></Outlet>
            {islogin || issignUp || <Footer></Footer>}
        </div>
    );
};

export default Mainlayout;