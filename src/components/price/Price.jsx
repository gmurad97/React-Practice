import { useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";

const Price = () => {
    const [binancePrice, setBinancePrice] = useState(0);
    const oldPrice = useRef(0);
    const refEl = useRef(null); // current -> input
    useEffect(() => {
        const update = setInterval(() => {

            fetch("https://api.binance.com/api/v3/avgPrice?symbol=SOLUSDT")
                .then((response) => {
                    return response.json();
                }).then((json) => {
                    setBinancePrice((prevPrice) => {
                        oldPrice.current = prevPrice;
                        return parseFloat(json.price).toFixed(4);
                    });
                })
        }, 1024);

        return () => {
            clearInterval(update);
        }
    }, []);

    return (
        <div className="price">
            <input type="text" ref={refEl} />
            <h1>SOL:
                <span style={binancePrice > oldPrice.current ? { backgroundColor: "green" } : { backgroundColor: "red" }}>
                    {binancePrice}
                </span>
                USDT</h1>
        </div>
    );
}

export default Price;