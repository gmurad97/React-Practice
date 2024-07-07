import { useHref, useParams } from "react-router-dom";

const Shop = () => {
    /* const { categoryName, productId } = useParams(); */
    const currentUrlRelativePath = useHref();
    const breadcrumb = currentUrlRelativePath.slice(1).split("/");


    const breadcrumbConcats = breadcrumb.reduce((acc, current, index, arr) => {
        if (index !== arr.length - 1)
            acc += current + " > ";
        else
            acc += current;

        return acc;
    }, "Breadcrumb: ");

    console.log(breadcrumbConcats);

    return (
        <div className="shop">
            Shop Page {/* - {typeof categoryName !== "undefined" && typeof productId === "undefined" ? "All " + categoryName + " Products" : categoryName + " Single Product " + productId} */}
        </div>
    );
}

export default Shop;