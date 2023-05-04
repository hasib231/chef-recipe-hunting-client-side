import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Layout/Header.jsx';
import Home from './pages/Home/Home/Home.jsx';
import NotFoundPage from './pages/Shared/NotFoundPage/NotFoundPage.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Chefs from './pages/Home/Chefs/Chefs.jsx';
import ChefDetails from './pages/ChefDetails/ChefDetails.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://chef-recipe-hunting-server-side-hasib231.vercel.app/chef"
          ),
      },
      {
        path: "/chef/:id",
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`https://chef-recipe-hunting-server-side-hasib231.vercel.app/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
