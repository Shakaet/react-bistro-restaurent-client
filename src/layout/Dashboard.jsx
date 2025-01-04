import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { FaBowlFood } from 'react-icons/fa6';
import { FcCamcorder } from 'react-icons/fc';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hook/useCart';

const Dashboard = () => {

    let [cart]=  useCart()
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-orange-400 p-4 md:min-h-screen">
        <ul className="menu space-y-4">
          <li>
            <NavLink to="/dashboard/userHome" className="flex items-center gap-2">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation" className="flex items-center gap-2">
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="flex items-center gap-2">
              <FaShoppingCart /> My Cart ({cart?.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addreview" className="flex items-center gap-2">
              <FaAd /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mybookings" className="flex items-center gap-2">
              <FaList /> My Booking
            </NavLink>
          </li>
          <div className="divider">OR</div>
          <li>
            <NavLink to="/" className="flex items-center gap-2">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="flex items-center gap-2">
              <FaBowlFood /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Salad" className="flex items-center gap-2">
              <FcCamcorder /> Order Food
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;