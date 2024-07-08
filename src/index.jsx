import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/app/App.jsx";

import Home from "./components/pages/Home.jsx";
import Shop from "./components/pages/Shop.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import About from "./components/pages/About.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'shop', element: <Shop /> },
            { path: 'shop/:categoryName', element: <Shop /> },
            { path: 'shop/:categoryName/:productId', element: <Shop /> },
            { path: 'contacts', element: <Contacts /> },
            { path: 'about', element: <About /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);