import "./Main.css";

import Category from "./components/category/Category";
import Slider from "./components/slider/Slider";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Card from "./components/card/Card";

const Main = () => {
    return (
        <main className="main">
            <nav className="category-nav">
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
                    <Card />
                </section>
            </article>
        </main>
    );
}

export default Main;