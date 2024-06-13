import { Suspense, useEffect, useState } from "react";

const HookPractice = () => {
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