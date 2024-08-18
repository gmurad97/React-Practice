import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            if (state.counter > 0)
                state.counter -= 1;
        },
        nullean: (state) => {
            state.counter = 0;
        }
    }
});


export const { increment, decrement, nullean } = counterSlice.actions;
export default counterSlice.reducer;