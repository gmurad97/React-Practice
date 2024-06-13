import {useDeferredValue, useState } from "react";

const Practice = () => {
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
