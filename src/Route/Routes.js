import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Logements from "../Pages/Logements"
import ErrorPage from "../Pages/ErrorPage"


function Routes() {
    const router = createBrowserRouter([
        { path:"/", element:<Home /> },
        { path: "/about", element: <About />},
        { path: "/logement", element: <Logements/> },
        { path: "*", element: <ErrorPage /> }  
    ]);
    
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
        
}

export default Routes