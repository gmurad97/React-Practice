import "./Topbar.css";

import Logo from "./components/logo/Logo";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";

const Topbar = () => {
    return (
        <div className="topbar">
            <Logo />
            <Search />
            <Cart />
        </div>
    );
}

export default Topbar;