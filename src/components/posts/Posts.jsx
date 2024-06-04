import { useEffect, useState } from "react";
import "./Posts.css";
import Pagination from "../pagination/Pagination.jsx";

const Posts = () => {
    const [postsData, setPostsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchingData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" });
            const json = await response.json();
            setPostsData(json);
        }

        fetchingData();
    }, []);

    const perPage = 6;
    const totalPages = Math.ceil(postsData.length / perPage);

    return (
        <>
            <div className="pagination">
                <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
            <div className="posts">
                {
                    postsData
                        .slice((currentPage - 1) * perPage, perPage * currentPage)
                        .map((post, index) => (
                            <p className="border" key={index}>{post.title}</p>
                        ))
                }
            </div>
        </>
    );
}

export default Posts;