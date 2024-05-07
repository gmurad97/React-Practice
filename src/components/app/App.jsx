import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>React Practice</h1>
            <BinanceData />
        </div>
    );
};

const BinanceData = () => {
    const [binanceData, setBinanceData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBinanceData(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                binanceData && (
                    <div>
                        <p>Symbol: BTCUSDT</p>
                        <p>Price: {binanceData.price}</p>
                        <p>Last updated: {new Date(binanceData.closeTime).toLocaleString()}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default App;
