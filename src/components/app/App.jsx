import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Practice from "../practice/Practice.jsx";
import MainLayout from "../pages/layout/MainLayout.jsx";

import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import Contacts from "../pages/Contacts.jsx";
import About from "../pages/About.jsx";

const App = () => {
    console.log("REACT_APP_UNIQUE_PROJECT_ID:\t" + process.env.REACT_APP_UNIQUE_PROJECT_ID)
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    )
}

export default App;