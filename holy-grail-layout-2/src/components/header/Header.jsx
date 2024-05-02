import "./Header.css";

import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";

const Header = () => {
    return (
        <header className="header">
            <Topbar />
            <Navbar />
        </header>
    );
}

export default Header;