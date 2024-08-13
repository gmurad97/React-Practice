const initialState = {
    count: 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }

        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }

        case "MULTIPLY":
            return {
                ...state,
                count: state.count * action.payload
            }

        case "NULLEAN":
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}