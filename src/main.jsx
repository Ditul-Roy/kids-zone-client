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
import UpdateCar from './pages/MyCar/UpdateCar/UpdateCar';
import ToyDetails from './pages/Toy/ToyDetails/ToyDetails';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/details/:id',
        element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
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
        path: '/update/:id',
        element: <UpdateCar></UpdateCar>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
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
