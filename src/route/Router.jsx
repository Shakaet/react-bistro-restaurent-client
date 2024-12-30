import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from '../layout/Mainlayout';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Order from '../pages/Order';

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
        }
      ]
    },
  ]);