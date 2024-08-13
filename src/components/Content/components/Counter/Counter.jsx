import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);

    return (
        <div className="counter">
            <h1 className="counter__show">{count}</h1>
            <div className="counter__control">
                <button className="counter__increment" onClick={() => dispatch({ type: "INCREMENT" })}>Increment (+1)</button>
                <button className="counter__decrement" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement (-1)</button>
                <button className="counter__multiply" onClick={() => dispatch({ type: "MULTIPLY", payload: 5 })}>Multiply (*5)</button>
                <button className="counter__nullean" onClick={() => dispatch({ type: "NULLEAN" })}>Nullean (0)</button>
            </div>
        </div>
    );
}

export default Counter;