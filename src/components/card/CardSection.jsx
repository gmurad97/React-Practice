import { useState, useEffect } from "react";
import "./CardSection.css";
import CardItem from "./components/card_item/CardItem";

const CardSection = () => {

    const [persons, setPersons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            setPersons(json);
        }
        getUsers();
        setLoading(false);
    }, []);

    const closePerson = (personId) => {
        setPersons((prevState) => (
            prevState.filter((person) => (
                person.id !== personId
            ))
        ));
    }

    if (loading) {
        return <h1>Loading data...</h1>
    }
    else {
        return (

            <div className="card__section">
                {persons.map((person) => (
                    <CardItem itemData={person} closePerson={closePerson} key={person.id} />
                ))}
            </div>
        );
    }
}

export default CardSection;