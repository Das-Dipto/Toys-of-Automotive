import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/PublicRoute/Root.jsx';
import MyToys from './Pages/PrivateRoute/MyToys.jsx';
import AddToys from './Pages/PrivateRoute/AddToys.jsx';
import Blog from './Pages/PublicRoute/Blog.jsx'
import AllToys from './Pages/PublicRoute/AllToys.jsx';
import Register from './Pages/PublicRoute/Register.jsx';
import Login from './Pages/PublicRoute/Login.jsx';
import Home from './Pages/PublicRoute/Home.jsx';
import AuthProvider from './ContextProvider/AuthProvider.jsx';
import ProtectedRoute from './Component/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"home",
        element:<Home></Home>
      },
      {
        path:"allToys",
        element:<AllToys></AllToys>
      },
      {
        path:'myToys',
        element: <ProtectedRoute> <MyToys></MyToys> </ProtectedRoute> 
      },
      {
        path:'addToys',
        element: <ProtectedRoute> <AddToys></AddToys> </ProtectedRoute> 
      },
      {
        path:'blogs',
        element:<Blog></Blog>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
