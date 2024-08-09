import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <div className="app">
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
        </div>
    );
}

export default App;