import { Link, useMatch } from "react-router-dom"

const CustomNavLink = ({ to, children }) => {
    const match = useMatch({
        path: to,
        end: false // shop/electronics - worked!
    });

    console.log(match);

    return (
        <Link to={to} className={match ? "nav-link active" : "nav-link"}>{children}</Link>
    )
}

export default CustomNavLink;