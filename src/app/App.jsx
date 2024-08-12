import "./App.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Content from "../components/Content/Content.jsx";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Content />
        </div>
    );
}

export default App;