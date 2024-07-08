import { useMatches } from "react-router-dom";

const Shop = () => {
    const matches = useMatches();
    console.log(matches);

    return (
        <div className="shop">
            Shop Page
        </div>
    );
}

export default Shop;