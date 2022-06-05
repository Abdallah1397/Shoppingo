import { SET_PAGE } from "../types/paginate";

const INITIAL_STATE = {
    currentPage: 0,
}

// Current PAge Reducer
const setCurrnetPageReducer = (state = INITIAL_STATE, actions) => {
    // Destructuring Action Object
    const { type, payload } = actions;
    switch (type) {
        case SET_PAGE:
            return {
                currentPage: payload,
            }
        default:
            return state;
    }
}
export default setCurrnetPageReducer;