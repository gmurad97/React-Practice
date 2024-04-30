import "./Card.css";

const Card = (props) => {
    const img_dir = "/assets/img/";
    return (
        <div className="card">
            <div className="card__img-block">
                <img src={img_dir + props.img_name} className="card__img" alt={props.title} />
            </div>
            <div className="card__content">
                <div className="card__body">
                    <h1 className="card__title">{props.title}</h1>
                    <p className="card__description">{props.description}</p>
                </div>
                <div className="card__footer">
                    <span className="card__price">{props.price}</span>
                    <button type="button" className="card__btn">Order</button>
                </div>
            </div>
        </div>
    );
}

export default Card;