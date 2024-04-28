import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Search from './components/Search';

function Header() {
    return (
        <header className="header">
            <Logo />
            <Navbar />
            <Search />
        </header>
    );
}

export default Header;