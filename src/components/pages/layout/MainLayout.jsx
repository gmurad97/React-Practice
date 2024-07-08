import { Outlet } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

const MainLayout = ({children}) => {
    return (
        <div className="container">
            <div className="row">
                <Navbar />
            </div>
            <div className="row">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;