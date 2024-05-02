import "./Category.css";

const Category = () => {
    return (
        <div className="category">
            <ul className="category__list">
                <li className="category__item">
                    <a href="/#" className="category__link">
                        First Category
                    </a>
                </li>
                <li className="category__item">
                    <a href="/#" className="category__link">
                        Second Category
                        <span className="category__item-badge">6</span>
                    </a>
                </li>
                <li className="category__item">
                    <a href="/#" className="category__link">
                        Third Category
                        <span className="category__item-badge">6</span>
                    </a>
                </li>
                <li className="category__item">
                    <a href="/#" className="category__link">
                        Fourth Category
                    </a>
                </li>
                <li className="category__item">
                    <a href="/#" className="category__link">
                        Fifth Category
                        <span className="category__item-badge">6</span>
                    </a>
                </li>
                <li className="category__item">
                    <a href="/#" className="category__link">
                        Sixth Category
                        <span className="category__item-badge">6</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Category;