import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './route/Router';
import { HelmetProvider } from 'react-helmet-async';
import Provider from './Provider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='max-w-screen-xl mx-auto'>
     <Provider>
     <QueryClientProvider client={queryClient}>
     <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
    </QueryClientProvider>
     </Provider>
     </div>
  </StrictMode>,
)
