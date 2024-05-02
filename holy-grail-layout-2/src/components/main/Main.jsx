import "./Main.css";

import Category from "./components/category/Category";
import Slider from "./components/slider/Slider";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Card from "./components/card/Card";

import product_list from "../../mock_data/products.js"; // PRODUCT LIST - MOCK DATA

const Main = () => {
    return (
        <main className="main">
            <nav className="category-nav">
                <h1 className="category-nav__title">Select Category</h1>
                <Category />
            </nav>
            <article className="article">
                <section className="article__section">
                    <Slider />
                </section>
                <section className="article__section">
                    <Breadcrumb />
                </section>
                <section className="article__section">
                    <h1 className="article__title">Products</h1>
                    <div className="card__wrapper">
                        {product_list.map((product) => (
                            <Card 
                            key={product.id}
                            product_id={product.id}
                            product_title={product.title}
                            product_description={product.description}
                            product_price={product.price}
                            product_img_name={product.img_name} 
                            />
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}

export default Main;