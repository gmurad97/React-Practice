import { Suspense, useEffect, useId, useState } from "react";

const HookPractice = () => {
    /* const id = useId();

    console.log(process.env.REACT_APP_API_TOKEN); */


    function search(formData) {
        formData.preventDefault();
        console.log(formData);
    }

    return (
        <div className="hookPractice">
            <form /* experimental action={search} */ onSubmit={search}>
                <input name="query" />
                <button type="submit">Search</button>
            </form>


            {/*             <style>
                {`textarea{background-color:blue;}`}
            </style>

            <select name="backend_name" id="persons" defaultValue={[2, 3]} multiple={true}>
                <option value="1">Alex</option>
                <option value="2">Vladimir</option>
                <option value="3">Murad</option>
            </select>

            <textarea name="" id="" value={"test-example"} />
            <progress value={0.32} /> */}

            {/*             <label htmlFor={id + "firstName"}>FirstName</label>
            <input type="text" id={id + "firstName"} />

            <label htmlFor={id + "lastName"}>LastName</label>
            <input type="text" id={id + "lastName"} /> */}
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