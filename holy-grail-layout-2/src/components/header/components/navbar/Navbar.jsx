import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">Catalogue</a>
                    <span className="navbar__item-badge">6</span>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">Company</a>
                    <span className="navbar__item-badge">2</span>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;