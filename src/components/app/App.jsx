import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [counter, setCounter] = useState(0);

    function counterInc() {
        setCounter(counter + 1);
    }

    return (
        <div className="app">
            <h1>Counter:{counter}</h1>
            <button type="button" onClick={counterInc}>Click Me!</button>
        </div>
    );
}

export default App;