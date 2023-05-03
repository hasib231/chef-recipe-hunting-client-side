import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Layout/Header.jsx';
import Home from './pages/Home/Home/Home.jsx';
import NotFoundPage from './pages/Shared/NotFoundPage/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
