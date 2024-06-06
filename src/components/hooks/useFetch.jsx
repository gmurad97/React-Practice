import { useEffect, useState } from "react";

const useFetch = (url, initialState) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        const fetchingData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }

        fetchingData();
    }, []);

    return [data, setData];
}

export default useFetch;