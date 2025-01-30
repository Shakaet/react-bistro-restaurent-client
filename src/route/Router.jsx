import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from '../layout/Mainlayout';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Order from '../pages/Order';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../layout/Dashboard';
import Cart from '../pages/Cart';
import Allusers from '../pages/Allusers';
import Additems from '../pages/Additems';
import AdminRoute from './AdminRoute';
import ManegeItems from '../pages/ManegeItems';
import UpdateItem from '../pages/UpdateItem';
import Payment from '../pages/Payment';
import PaymentHistory from '../pages/PaymentHistory';

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/order/:category",
          element:<Order></Order>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>

        }
      ]
    },

    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[

        // normal user route
        {
          path:"cart",
          element:<Cart></Cart>
        },
        {
          path:"payment",
          element:<Payment></Payment>
        },
        {
          path:"paymentHistory",
          element:<PaymentHistory></PaymentHistory>
        },

        // admin panel routes

        {
          path:"allusers",
          element:<AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
          path:"additems",
          element:<AdminRoute><Additems></Additems></AdminRoute>
        },
        {
          path:"manageItems",
          element:<AdminRoute><ManegeItems></ManegeItems></AdminRoute>

        },

       
        {
          path:"updateItem/:id",
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
      
    }
  ]);