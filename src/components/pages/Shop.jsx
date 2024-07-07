import { useParams } from "react-router-dom";

const Shop = () => {
    const { categoryName, productId } = useParams();

    return (
        <div className="shop">
            Shop Page - {typeof categoryName !== "undefined" && typeof productId === "undefined" ? "All " + categoryName + " Products" : categoryName + " Single Product " + productId}
        </div>
    );
}

export default Shop;