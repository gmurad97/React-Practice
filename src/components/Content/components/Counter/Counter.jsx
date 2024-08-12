import "./Counter.css";

const Counter = () => {
    return (
        <div className="counter">
            <h1 className="counter__show">10000</h1>
            <div className="counter__control">
                <button className="counter__increment">Increment (+1)</button>
                <button className="counter__decrement">Decrement (-1)</button>
                <button className="counter__multiply">Multiply (*5)</button>
                <button className="counter__nullean">Nullean (0)</button>
            </div>
        </div>
    );
}

export default Counter;