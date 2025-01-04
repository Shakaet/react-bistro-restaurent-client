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
        {
          path:"cart",
          element:<Cart></Cart>
        }
      ]
      
    }
  ]);