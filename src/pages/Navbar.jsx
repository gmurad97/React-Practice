import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul style={{ display: "flex", flexDirection: "row", listStyleType: "none" }}>
                <li style={{ margin: "4px" }}>
                    <Link to="/home">Home</Link>
                </li>
                <li style={{ margin: "4px" }}>
                    <Link to="/about">About</Link>
                </li>
                <li style={{ margin: "4px" }}>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;