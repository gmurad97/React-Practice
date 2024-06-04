import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {

    const paginationButtons = () => {
        const buttons = [];
        const maxButtons = 3;

        let from = Math.max(1, currentPage - 1);
        let to = Math.min(totalPages, from + maxButtons - 1);


        if (to - from < maxButtons - 1) {
            from = Math.max(1, to - maxButtons + 1);
        }

        for (let x = from; x <= to; x++) {
            buttons.push(
                <button onClick={() => setCurrentPage(x)} key={x}>{x === currentPage ? `[${x}]` : x}</button>
            );
        }

        buttons.unshift(<button onClick={() => setCurrentPage(1)} key="pagination_first_page_btn">First Page</button>);
        buttons.push(<button onClick={() => setCurrentPage(totalPages)} key="pagination_last_page_btn">Last Page</button>)

        return buttons;
    }

    return (
        <div className="pagination">
            {paginationButtons()}
            <input
                className="numeric"
                onChange={(event) => setCurrentPage(event.target.value)}
                value={currentPage}
                type="number"
                min={1}
                max={totalPages}

            />
        </div>
    );
}

export default Pagination;