import React from "react";
import "./CardItem.css";

class CardItem extends React.Component {
    render() {
        const { id, first_name, last_name, description, img } = this.props.itemData;
        return (
            <div className="card__item">
                <div className="card__header">
                    <div className="card__img-block">
                        <img className="card__img" src={img} alt="Card" />
                    </div>
                </div>
                <div className="card__body">
                    <h1 className="card__title">{first_name} {last_name}</h1>
                    <p className="card__description">{description}</p>
                </div>
                <div className="card__footer">
                    <button
                        onClick={() => this.props.closePerson(id)}
                        className="card__btn"
                        type="button">
                        Close Person
                    </button>
                </div>
            </div>
        );
    }
}

export default CardItem;