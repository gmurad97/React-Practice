import { BrowserRouter, Routes, Route } from "react-router-dom";
import Practice from "../practice/Practice.jsx";
import MainLayout from "../pages/layout/MainLayout.jsx";

import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import Contacts from "../pages/Contacts.jsx";
import About from "../pages/About.jsx";

const App = () => {
    console.log("REACT_APP_UNIQUE_PROJECT_ID:\t" + process.env.REACT_APP_UNIQUE_PROJECT_ID)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="shop" element={<Shop />} />

                    {/* example.com/electronics */}
                    <Route path="shop/:categoryName" element={<Shop />} />

                    {/* example.com/electronics/159 */}
                    <Route path="shop/:categoryName/:productId" element={<Shop />} />

                    <Route path="contacts" element={<Contacts />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;