import { ADD_PRODUCT } from "../types/cart";

const INITIAL_STATE = {
    totalQty: 0,
    cart: [],
};
// Function make change on state based on action types
const CartReducer = (state = INITIAL_STATE, action) => {
    // Object Destructuring
    const { type, payload, quantity } = action;
    switch (type) {
        case ADD_PRODUCT:
            // check if the item found in the cart or not
            let found = state.cart.find((item) => item.id === payload.id);
            if (!found) {
                // pass the quantity to qty
                payload.qty = quantity;
                return {
                    totalQty: state.totalQty + quantity,
                    cart: [...state.cart, payload],
                };
            } else {
                // we will add pervious qty to the current quantity
                payload.qty += quantity;
                return {
                    totalQty: state.totalQty + quantity,
                    cart: [...state.cart],
                };
            }
        default:
            return {
                ...state,
            };
    }
};
export default CartReducer;
