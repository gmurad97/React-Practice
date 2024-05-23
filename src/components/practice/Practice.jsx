import { useReducer } from "react";

const Practice = () => {
    const counterInitialState = { count: 0 };

    const counterReducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            case "reset":
                return { count: 0 };
            default:
                return { count: "error" }
        }
    }

    const [counter, counterDispatch] = useReducer(counterReducer, counterInitialState);

    return (
        <div className="practice">
            <p>Счет: {counter.count}</p>
            <button onClick={() => counterDispatch({ type: "increment" })}>
                Увеличить
            </button>
            <button onClick={() => counterDispatch({ type: "decrement" })}>
                Уменьшить
            </button>
            <button onClick={() => counterDispatch({ type: "reset" })}>
                Сбросить
            </button>
        </div>
    );
}

export default Practice;