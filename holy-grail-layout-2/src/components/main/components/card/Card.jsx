import "./Card.css";

const Card = (props) => {
    const card_img_dir = "assets/img/";
    return (
        <div className="card">
            <div className="card__header">
                <img
                    className="card__header-img"
                    src={card_img_dir + props.product_img_name}
                    alt={"Card_" + props.product_id}
                />
            </div>
            <div className="card__body">
                <span className="card__body-price">EUR {props.product_price}</span>
                <h1 className="card__body-title">
                    {props.product_title}
                </h1>
                <p className="card__body-description">
                    {props.product_description}
                </p>
            </div>
            <div className="card__footer">
                <button type="button" className="card__footer-button">Add to Cart</button>
            </div>
        </div>
    );
}

export default Card;