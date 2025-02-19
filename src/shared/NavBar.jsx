import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider';
import { FaCartArrowDown } from "react-icons/fa";
import useCart from '../hook/useCart';

const NavBar = () => {

  let {user,signOuts}= useContext(AuthContext)


  let [cart]= useCart()

  // let [cart,setCart]=useState()


  // useEffect(()=>{
  //   fetch("http://localhost:5000/carts")
  //   .then(res=>res.json())
  //   .then(data=>setCart(data))
  // },[cart])


  let handleLogout=()=>{

    signOuts()
    .then(()=>{})
    .catch((err)=>console.log(err))

  }

    let link=
    
    <div className='flex items-center'>

      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/menu">Menu Item</NavLink></li>
      <li><NavLink to="/order/Salad">Order Food</NavLink></li>
      <li>
      <Link to={"/dashboard/cart"} className="btn">
      <FaCartArrowDown />
          <div className="badge badge-secondary">+{cart?.length}</div>
        </Link>
                
        </li>
      

      {
        user ? <> <li><Link onClick={handleLogout}>Sign Out</Link></li>

        </>
         
        : 
        <><li><NavLink to="/login">login</NavLink></li></>
      }
     
    
    
    </div>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 md:bg-black md:text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-extrabold">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;