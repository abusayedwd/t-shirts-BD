import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import Order from './components/orders/Order'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Granpa from './components/Granpa/Granpa';
 
const router = createBrowserRouter([
  {
    path:'/',
    element:   <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('tshits.json')
      },
      {
        path: 'order',
        element:<Order></Order>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path:'granpa',
        element:<Granpa></Granpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
