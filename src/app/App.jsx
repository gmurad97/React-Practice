import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, nullean } from "../store/slices/counterSlice.js";

const App = () => {
    const counter = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    console.log(counter)
    return (
        <div className="app">
            <h1>{counter}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(nullean())}>Nullean</button>
        </div>
    );
}

export default App;