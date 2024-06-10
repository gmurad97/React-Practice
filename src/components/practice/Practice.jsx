import useFetch from "../../hooks/useFetch";

const Practice = () => {
    const [data] = useFetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT");

    console.log(data);

    return (
        <div className="practice"></div>
    );
}

export default Practice;