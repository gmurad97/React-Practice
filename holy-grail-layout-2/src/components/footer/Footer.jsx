import "./Footer.css";

import Copyright from "./components/copyright/Copyright";
import CreatedBy from "./components/createdby/CreatedBy";

const Footer = () => {
    return (
        <footer className="footer">
            <Copyright />
            <CreatedBy />
        </footer>
    );
}

export default Footer;