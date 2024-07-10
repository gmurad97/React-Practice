import { redirect, useLocation, useNavigate } from "react-router-dom";

const Shop = () => {
    const navigate = useNavigate();
    return (
        <div className="shop">
            Shop Page
            <button onClick={()=> navigate("/home")}>Go to Home</button>
        </div>
    );
}

export default Shop;