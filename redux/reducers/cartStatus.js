import { TOGGLE_CART } from "../types/cartStatus";

const INITIAL_STATE = {
    cartStatus: false,
}

const cartStatusReducer = (state = INITIAL_STATE, actions) => {
    const { type } = actions;
    switch (type) {
        case TOGGLE_CART:
            return {
                cartStatus: !state.cartStatus,
            }
        default:
            return {
                ...state,
            }
    }
}
export default cartStatusReducer;