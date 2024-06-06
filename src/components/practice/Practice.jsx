import { useReducer } from "react";
import useFetch from "../hooks/useFetch";

const Practice = () => {
    const [data, setData] = useFetch("https://jsonplaceholder.typicode.com/users", []);

    const reducer = (state, { type, inc }) => {
        switch (type) {
            case "increment":
                return state + inc;
            case "decrement":
                return state - inc
            case "multiply":
                return state * inc
            case "reset":
                return 0
            default:
                return "Error!";
        }
    }

    const [counter, dispatchCounter] = useReducer(reducer, 0)

    return (
        <div className="practice">
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatchCounter({ type: "increment", inc: 1 })}>+1</button>
            <button onClick={() => dispatchCounter({ type: "increment", inc: 100 })}>+100</button>
            <button onClick={() => dispatchCounter({ type: "decrement", inc: 100 })}>-100</button>
            <button onClick={() => dispatchCounter({ type: "decrement", inc: 1 })}>-1</button>
            <button onClick={() => dispatchCounter({ type: "multiply", inc: 2 })}>*2</button>
            <button onClick={() => dispatchCounter({ type: "reset", inc: 0 })}>Reset</button>
            {/* {data.map((item,index)=>(
                <h3 key={index}>{item.name}</h3>
            ))} */}
        </div>
    );
}

export default Practice;