//generated chatgpt 4o code for learning and analyze

import React, { useState, useDeferredValue, useEffect } from 'react';

function List({ input }) {
    // Предположим, что этот компонент рендерит большой список элементов
    const deferredInput = useDeferredValue(input);

    useEffect(() => {
        // Эта функция будет вызываться реже, чем обновляется input
        console.log('Deferred input:', deferredInput);
    }, [deferredInput]);

    return (
        <ul>
            {Array(5000).fill(null).map((_, index) => (
                <li key={index}>{deferredInput}</li>
            ))}
        </ul>
    );
}

function App() {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} />
            <List input={input} />
        </div>
    );
}

export default App;
