import logo from '../../../img/logo.png';

function Logo() {
    return (
        <div className="logo">
            <a href="/#" className="logo__link">
                <img src={logo} className="logo__img" alt="Logo" />
            </a>
        </div>
    );
}

export default Logo;