import { useState, useEffect } from "react";
import "./Pagination.css";
import posts from "../../mock.js";

const Pagination = () => {
    const [postsData, setPostsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setPostsData(posts);
    }, [])

    const perPage = 3;
    const totalPages = Math.ceil(postsData.length / perPage);

    const paginationButtons = () => {
        const buttons = [];

        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + 5 - 1);

        if (endPage - startPage < 5 - 1) {
            startPage = Math.max(1, endPage - 5 + 1);
        }

        for (let x = startPage; x <= endPage; x++) {
            buttons.push(<button key={x} onClick={() => setCurrentPage(x)}>{x}</button>);
        }

        buttons.unshift(<button key="pagination_first_page_btn_pGniTS1">First Page</button>); //first button
        buttons.push(<button key="pagination_last_page_btn_pGniTS2">Last Page</button>); // last button
        return buttons;
    }


    return (

        <div className="content">
            <div className="pagination">
                {paginationButtons()}
            </div>
            {postsData
                .slice((currentPage - 1) * perPage, perPage * currentPage)
                .map((item, index) => (
                    <h3 key={index}>{item.title}</h3>
                ))}
        </div>
    );
}

export default Pagination;