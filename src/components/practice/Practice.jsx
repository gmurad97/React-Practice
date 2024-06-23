import { useDeferredValue, useState } from "react";
import { flushSync } from "react-dom";

const Practice = () => {
    const [state, setState] = useState(false);

    const urgentChangeState = () => {
        //sync
        flushSync(() => {
            setState(prev => prev ? false : true);
        });
    }

    return (
        <div className="practice">
            <h1>State:{state ? "TRUE" : "FALSE"}</h1>
            <button type="button" onClick={() => urgentChangeState()}>Click me</button>
        </div>
    );
}

const PracticeOld2 = {
    Header: () => {

        return (<h1>Header</h1>);
    },

    Main: () => {
        return (<h1>Main</h1>);
    },

    Footer: () => {
        return (<h1>Footer</h1>);
    }
}

const PracticeOld = () => {
    const [stack] = useState(Array(10000).fill().map((_, index) => "Item " + index));
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    const filteredStack = stack.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const deferredFilteredStack = useDeferredValue(filteredStack);

    return (
        <div className="practice">
            <input type="text" onChange={handleSearch} placeholder="Enter item number to search" />
            {deferredFilteredStack.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

export default Practice;
