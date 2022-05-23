import { ADD_PRODUCT } from '../types/cart';

const INITIAL_STATE = {
    totalQty: 0,
    cart: [],
}
// Function make change on state based on action types
const CartReducer = (state = INITIAL_STATE, action) => {
    // Object Destructuring
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT:
            let found = state.cart.find((item) => item.id === payload.id);
            if (!found) {
                payload.qty = 1;
                return {
                    totalQty: state.totalQty + 1,
                    cart: [...state.cart, payload],
                }
            } else {
                payload.qty += 1;
                return {
                    totalQty: state.totalQty + 1,
                    cart: [...state.cart, payload],
                }
            }
    }
    return state;
}
export default CartReducer;