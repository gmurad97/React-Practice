import "./Logo.css";

import LogoImg from "../../../../../../assets/img/logo.svg";

const Logo = ()=>{
    return(
        <div className="logo">
            <img src={LogoImg} className="logo__img" alt="Logo" />
        </div>
    );
}

export default Logo;