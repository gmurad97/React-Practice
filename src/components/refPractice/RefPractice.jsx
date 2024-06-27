import { forwardRef, useRef, useState, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {

    const copyRef = useRef(null); // forwardRef are you serios?!

    useImperativeHandle(ref, () => ({
        //yes programmer i am serious О_о
        krutoyFocus: () => {
            copyRef.current.focus();
        },
        setDefaultText: () => {
            copyRef.current.value = "default text uses useImprativeHandle and forwardRef";
        }
    }))

    return (
        <div className="input">
            {/* WHAT?! */}
            <input ref={copyRef} type="text" placeholder="refs" />
        </div>
    );
});

const RefPractice = () => {
    const [state, setState] = useState(0);
    const inp = useRef();

    function click() {
        setState(inp.current);
        console.log(state);
        //REF PLEASE STOOOOOOOP!!!! My brain flew away :(
        inp.current.krutoyFocus();
        inp.current.setDefaultText();
    }

    return (
        <div className="refpractice">
            <button onClick={() => click()}>Click me</button>
            <Input ref={inp} />{/* OMG!!! */}
        </div>
    );
}

export default RefPractice;