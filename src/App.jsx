import { BrowserRouter, Routes, Route } from "react-router-dom";
// BrowserRouter => Routes -> Route
// DivContainer => Ul -> Li example :D

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contacts.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* For use parent layout dont forget use <Outlet /> from react-router-dom */}
                <Route path="/"> {/* element say: where is my layout??? *_* */}
                    <Route index element={<Home />}></Route>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="contacts" element={<Contact />}></Route>

                    {/* Universal Path for 404 error */}
                    {/* <Route path="*" element={<Contact />}></Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;