const { useCallback, useEffect } = require("react")

const Practice = () => {
    const memorizedCallback = useCallback(()=>{
        console.log("component redered")
    },[]);

    useEffect(()=>{
        memorizedCallback();
    }, []);

    const clickFunc = () => {
        memorizedCallback();
    }

    return(
        <>
        <h1 onClick={clickFunc}>practice</h1>
        </>
    );
}

export default Practice;