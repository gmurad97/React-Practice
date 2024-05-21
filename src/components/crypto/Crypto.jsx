import { useState, useEffect, useRef } from "react";

const Crypto = () => {
    const oldBtcPrice = useRef(0);
    const [btcPrice, setBtcPrice] = useState(0);
    useEffect(() => {
        async function getPrice() {
            const response = await fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT", {
                "method": "GET"
            });
            const json = await response.json();
            setBtcPrice(prevPrice => {
                oldBtcPrice.current = prevPrice;
                return json.price;
            });
        }
        getPrice();
        const timer = setInterval(() => {
            getPrice();
        }, 4096);

        return () => {
            clearInterval(timer);
        }
    }, [])


    /* console.log(typeof btcPrice); */
    console.log(oldBtcPrice)

    return (
        <div className="crypto">
            <h1>Bitcoin</h1>
            <p>Price: <span style={btcPrice > oldBtcPrice.current ? {backgroundColor:"green"}:{backgroundColor:"red"}}>{btcPrice}</span></p>
        </div>
    );
}

export default Crypto;