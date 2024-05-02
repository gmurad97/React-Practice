import "./Cart.css";

const Cart = () => {
    return (
        <div className="cart">
            <span className="cart__info">
                <i className="material-icons">shopping_cart</i>
                <strong className="cart__item-count">3 items</strong> / 
                <span className="cart__item-price">EUR 199.90</span>
            </span>
        </div>
    );
}

export default Cart;