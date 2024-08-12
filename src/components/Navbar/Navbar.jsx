import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list-item">Menu1</li>
                <li className="navbar__list-item">Menu2</li>
                <li className="navbar__list-item">Menu3</li>
                <li className="navbar__list-item">Menu4</li>
            </ul>
            <div className="navbar__data">
                Counter
            </div>
        </div>
    );
}

export default Navbar;