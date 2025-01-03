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
          element:<PrivateRoute><Order></Order></PrivateRoute>
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
  ]);