import useFetch from "../hooks/useFetch";

const Practice = () => {

    const [data, setData] = useFetch("https://jsonplaceholder.typicode.com/users", []);

    return (
        <div className="practice">
            {data.map((item,index)=>(
                <h3 key={index}>{item.name}</h3>
            ))}
        </div>
    );
}

export default Practice;