function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">Products</a>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">Blog</a>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">News</a>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">About</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;