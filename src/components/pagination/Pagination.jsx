import { useState, useEffect } from "react";
import "./Pagination.css";
import products from "../../mock.js";

const Pagination = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    console.log(products)

    return (
        <div className="content">
            {data.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))}
            <div className="pagination">
                <button>First Page</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>Last Page</button>
            </div>
        </div>
    );
}

export default Pagination;