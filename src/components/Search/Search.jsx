import { useEffect, useState,useRef } from "react";
import { createPortal } from "react-dom";

const Search = () => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const request = async () => {
            const response = await fetch("http://dummyjson.com/users");
            const json = await response.json();
            setUsers(json.users);
        }
        request();
    }, []);

    const searchName = (e) => {
        setQuery(e.target.value);
    }

    const filteredUsers = users.filter((user) => user.firstName.toLowerCase().startsWith(query.toLowerCase()));

    return (
        <div className="container">
            <input type="text" onChange={(e) => searchName(e)} />
            {createPortal((
                <dialog open={true}>
                    <h1>This is Dialog</h1>
                </dialog>
            ), document.getElementById("root"))}
            {filteredUsers.map((user, index) => (
                <h1 key={index}>{user.firstName}</h1>
            ))}
        </div>
    );
}

export default Search;