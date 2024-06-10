import { useState, useEffect, useDebugValue } from "react";

/**
 * 
 * @param {URL} url 
 * @returns 
 */
const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchingData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }

        fetchingData();
    }, []);

    //For React Dev Tool - Debug Information
    //Strict use only in custom hooks
    useDebugValue({
        price: data.price
    });

    return [data];
}

export default useFetch;