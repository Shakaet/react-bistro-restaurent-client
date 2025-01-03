import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './route/Router';
import { HelmetProvider } from 'react-helmet-async';
import Provider from './Provider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='max-w-screen-xl mx-auto'>
     <Provider>
     <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
     </Provider>
     </div>
  </StrictMode>,
)
