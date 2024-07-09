import { NavLink } from "react-router-dom";
import CustomNavLink from "./CustomNavLink.jsx";

const Navbar = () => {

    //isActive & isPending & isTransitioning
    const activeStyle = ({ isActive }) => ({
        color: isActive ? "red" : "",
        textDecorationLine: isActive ? "underline" : ""
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <CustomNavLink to="/home">Home</CustomNavLink>
                        <CustomNavLink to="/shop">Shop</CustomNavLink>
                        <CustomNavLink to="/contacts">Contacts</CustomNavLink>
                        <CustomNavLink to="/about">About</CustomNavLink> */}
                        <NavLink to="/home" className="nav-link" style={activeStyle}>Home</NavLink>
                        <NavLink to="/shop" className="nav-link" style={activeStyle}>Shop</NavLink>
                        <NavLink to="/contacts" className="nav-link" style={activeStyle}>Contacts</NavLink>
                        <NavLink to="/about" className="nav-link" style={activeStyle}>About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;