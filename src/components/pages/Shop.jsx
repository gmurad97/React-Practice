import { useParams } from "react-router-dom";

const Shop = () => {
    const urlQuery = useParams();
    return (
        <div className="shop">
            Shop Page - {urlQuery.categoryName}
        </div>
    );
}

export default Shop;