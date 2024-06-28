import axios from "axios";

import { useEffect, useState} from "react";

//useOptimistic - from react canary/experimental channel
/* import {useOptimistic} from "react/canary"; */

const Practice = () => {
/*     const [state, setState] = useState("loading...");
    const [optimisticState, addOptimistic] = useOptimistic(state, (prevState, newData) => ({
        ...prevState,
        ...newData
    })); */

/*     function clickHandle(){
        addOptimistic("loading...");

        setTimeout(()=>{
            try{
                setState("success");
            }
            catch{
                setState("failed...");
            }
        },2048);
    }

    return (
        <div className="practice">
            <h1>{optimisticState}</h1>
            <button onClick={()=>clickHandle()}></button>
        </div>
    ); */
}

const ThirdPractice = () => {
    const [price, setPrice] = useState(0.0);
    const [oldPrice, setOldPrice] = useState(0.0);

    useEffect(() => {
        const req = async () => {
            const response = await axios.get("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT");
            setPrice((prevValue) => {
                setOldPrice(prevValue);
                return parseFloat(response.data.price);
            });
        }

        const interval = setInterval(() => {
            req();
        }, 4096);

        return () => {
            clearInterval(interval);
        }

    }, []);


    console.log(price > oldPrice, `${price}  ${oldPrice}`);

    return (
        <div className="practice">
            <h1
                style={price > oldPrice ? { backgroundColor: "green" } : { backgroundColor: "red" }}
            >
                {price.toFixed(5)}
            </h1>
        </div>
    );
}

export default Practice;