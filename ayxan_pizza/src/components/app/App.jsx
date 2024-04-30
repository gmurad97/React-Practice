import "./App.css";
import Card from "../card/Card";
import pizza from "../../pizza_data";

const App = () => {
    return (
        <div className="app">
            <div className="card-container">
                {pizza.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        img_src={item.img_path}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;