import { Suspense, useEffect, useId, useState } from "react";

const HookPractice = () => {
    const id = useId();

    console.log(process.env.REACT_APP_API_TOKEN);

    return (
        <div className="hookPractice">

            <label htmlFor={id + "firstName"}>FirstName</label>
            <input type="text" id={id + "firstName"} />

            <label htmlFor={id + "lastName"}>LastName</label>
            <input type="text" id={id + "lastName"} />
        </div>
    );
}

const HookPracticeOld = () => {
    return (
        <div className="hookPractice">
            <Suspense fallback={<p>Loading...</p>}> {/* if some component no loaded or promise return reject or pending then fallback activate */}
                <SomeComponent />
            </Suspense>
        </div>
    );
}

const SomeComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setData("Data has loaded successfully!");
        };

        fetchData();
    }, []);

    return (
        <div>
            {data}
        </div>
    );
}


export default HookPractice;