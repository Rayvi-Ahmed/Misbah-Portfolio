import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <div className='h-[4000px]'></div>
  </div>
)
