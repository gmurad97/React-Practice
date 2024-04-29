//EXPEREMENT FOR WORK THIS FUNC USE USESTATE & USEEFFECT
export default function BinanceData() {
    fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT", {
        method: "GET",
        headers: {
            "accept": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return <h1>{data.price}</h1>;
    }).catch((reason) => {
        console.log(reason);
    });
}