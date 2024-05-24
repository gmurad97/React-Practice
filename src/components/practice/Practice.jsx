import React, { useReducer } from "react";

const Practice = () => {
    const counterInitialState = { count: 0 };
    const counterReducer = (state, action) => {
        switch (action.operand) {
            case "plus":
                return { count: state.count + action.increment };
            case "minus":
                return { count: state.count - action.decrement };
            case "multiply":
                return { count: state.count * action.multiply };
            case "reset":
                return { count: 0 }
            default:
                return { count: 0 }
        }
    }
    const [count, countDispatch] = useReducer(counterReducer, counterInitialState);

    return (
        <div className="practice">
            <h1>Count: {count.count}</h1>
            <button onClick={() => countDispatch({ "operand": "plus", "increment": 1 })}>Plus</button>
            <button onClick={() => countDispatch({ "operand": "minus", "decrement": 1 })}>Minus</button>
            <button onClick={() => countDispatch({ "operand": "multiply", "multiply": 2 })}>Multiply(2x)</button>
            <button onClick={() => countDispatch({ "operand": "reset" })}>Reset</button>
        </div>
    );
}

export default Practice;