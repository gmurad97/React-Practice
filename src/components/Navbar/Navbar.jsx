import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
    /* const dispatch = useDispatch(); */
    const count = useSelector(state => state.counter.count);

    return (
        <div className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list-item">Menu1</li>
                <li className="navbar__list-item">Menu2</li>
                <li className="navbar__list-item">Menu3</li>
                <li className="navbar__list-item">Menu4</li>
            </ul>
            <div className="navbar__data">
                {count}
            </div>
        </div>
    );
}

export default Navbar;