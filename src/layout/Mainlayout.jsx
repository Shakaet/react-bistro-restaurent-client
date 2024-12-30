import React from 'react';
import NavBar from '../shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Mainlayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;