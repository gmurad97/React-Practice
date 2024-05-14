import React from "react";
import "./CardSection.css";
import CardItem from "./components/card_item/CardItem";

class CardSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { "id": 1, "first_name": "Murad", "last_name": "Gazymagomedov", "description": "Senior Full Stack Web Developer", "img": "https://i.ytimg.com/vi/jc917fHbgHI/maxresdefault.jpg" },
                { "id": 2, "first_name": "Alice", "last_name": "Smith", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img": "https://i.ytimg.com/vi/3WjWLCqsN4Q/maxresdefault.jpg" },
                { "id": 3, "first_name": "John", "last_name": "Johnson", "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "img": "https://i.ytimg.com/vi/JQliH3EgeKg/maxresdefault.jpg" },
                { "id": 4, "first_name": "Emma", "last_name": "Williams", "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "img": "https://i.ytimg.com/vi/if84agWaFmM/maxresdefault.jpg" },
                { "id": 5, "first_name": "Michael", "last_name": "Brown", "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "img": "https://images.hdqwalls.com/download/thanos-4k-new-art-xs-1280x720.jpg" },
                { "id": 6, "first_name": "Sophia", "last_name": "Jones", "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "https://images.hdqwalls.com/download/thanos-4k-new-art-xs-1280x720.jpg" },
                { "id": 7, "first_name": "Daniel", "last_name": "Miller", "description": "Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "https://i.ytimg.com/vi/vSG2fntgzYk/maxresdefault_live.jpg" },
                { "id": 8, "first_name": "Olivia", "last_name": "Davis", "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", "img": "https://i.pinimg.com/originals/bf/76/54/bf7654c600d2045195cc0f703ab87a5d.jpg" },
                { "id": 9, "first_name": "James", "last_name": "Garcia", "description": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.", "img": "https://tierragamer.com/wp-content/uploads/2022/09/los-simpson-lisa.jpg" },
                { "id": 10, "first_name": "Emily", "last_name": "Rodriguez", "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.", "img": "https://i.ytimg.com/vi/hQUrprN84QI/maxresdefault.jpg" }
            ]
        };
    }

    closePerson = (personId) => {
        this.setState((prevState) => ({
            persons: prevState.persons.filter(person => person.id !== personId)
        }));
    }

    render() {
        return (
            <div className="card__section">
                {this.state.persons.map((person) => (
                    <CardItem itemData={person} closePerson={this.closePerson} key={person.id} />
                ))}
            </div>
        );
    }
}

export default CardSection;