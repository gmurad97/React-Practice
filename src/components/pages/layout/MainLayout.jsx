import { Outlet } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="container">
            <div className="row">
                <Navbar />
            </div>
            <div className="row">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;