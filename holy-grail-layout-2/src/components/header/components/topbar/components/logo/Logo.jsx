import "./Logo.css";

import LogoImg from "../../../../../../assets/img/logo.svg";

const Logo = () => {
    return (
        <div className="logo">
            <a href="/#" className="logo__link">
                <img src={LogoImg} className="logo__img" alt="Logo" />
            </a>
        </div>
    );
}

export default Logo;