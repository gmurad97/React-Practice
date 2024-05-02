import "./Breadcrumb.css";

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                    <a href="/#" className="breadcrumb__link">
                        <i className="material-icons">home</i>
                    </a>
                </li>
                <li className="breadcrumb__item">
                    <a href="/#" className="breadcrumb__link">
                        Catalogue
                    </a>
                </li>
                <li className="breadcrumb__item">
                    <a href="/#" className="breadcrumb__link">
                        First Category
                    </a>
                </li>
                <li className="breadcrumb__item">
                    Sub Category 1
                </li>
            </ul>
        </div>
    );
}

export default Breadcrumb;