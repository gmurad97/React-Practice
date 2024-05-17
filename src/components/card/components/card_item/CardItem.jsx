import React from "react";
import "./CardItem.css";

class CardItem extends React.Component {
    render() {
        const { id, name, email } = this.props.itemData;
        return (
            <div className="card__item">
                <div className="card__header">
                    <div className="card__img-block">
                        <img className="card__img" src="https://media.moddb.com/images/articles/1/73/72743/image_error_full.png" alt="Card" />
                    </div>
                </div>
                <div className="card__body">
                    <h1 className="card__title">{"ID:" + id + " " + name}</h1>
                    <p className="card__description">Email: {email}</p>
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