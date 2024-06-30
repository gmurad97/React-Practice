import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                        <NavLink to="/shop" className="nav-link">Shop</NavLink>
                        <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;