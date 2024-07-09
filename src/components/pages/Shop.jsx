import { useLocation } from "react-router-dom";

const Shop = () => {
    let currentLocation = useLocation();
    console.log(currentLocation)
    console.log(currentLocation.pathname);
    console.log(currentLocation.hash);
    console.log(currentLocation.key);
    console.log(currentLocation.search);
    console.log(currentLocation.state);

    return (
        <div className="shop">
            Shop Page
        </div>
    );
}

export default Shop;