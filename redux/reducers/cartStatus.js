import { TOGGLE_CART, CLOSE_CART } from "../types/cartStatus";

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
        case CLOSE_CART:
            return {
                cartStatus: false,
            }
        default:
            return state;
    }
}
export default cartStatusReducer;