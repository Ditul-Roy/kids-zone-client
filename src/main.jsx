import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home/Home.jsx';
import Main from './Layout/Main';
import LogIn from './pages/Login/LogIn/LogIn';
import SignUp from './pages/Login/SignUp/SignUp';
import AuthProvider from './AuthProvideer/AuthProvider';
import Toys from './pages/Toy/Toys/Toys';
import AddCar from './pages/AddCar/AddCar';
import MyCar from './pages/MyCar/Mycar/MyCar';
import PrivateRoutes from './Routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/toys',
        element: <Toys></Toys>
      },
      {
        path: '/addcar',
        element: <AddCar></AddCar>
      },
      {
        path: '/mycar',
        element: <PrivateRoutes><MyCar></MyCar></PrivateRoutes>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-24 my-8'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
