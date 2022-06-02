import { ADD_ONE_PRODUCT, ADD_PRODUCT, REMOVE_PRODUCT } from "../types/cart";

const INITIAL_STATE = {
    totalQty: 0,
    cart: [],
};
// Function make change on state based on action types
const CartReducer = (state = INITIAL_STATE, action) => {
    // Object Destructuring
    const { type, payload, quantity } = action;
    switch (type) {
        case ADD_ONE_PRODUCT:
            // check if product exist or not
            let productFound = state.cart.find((item) => item.id === payload.id);
            if (!productFound) {
                payload.qty = 1;
                return {
                    totalQty: state.totalQty + 1,
                    cart: [...state.cart, payload],
                }
            } else {
                payload.qty++;
                return {
                    totalQty: state.totalQty + 1,
                    cart: [...state.cart],
                }
            }
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
        case REMOVE_PRODUCT:
            // remove item from cart by using filter method
            const filteredCart = state.cart.filter((item) => item.id !== payload.id);
            // get totalQty after data filtered
            const total = state.totalQty - payload.qty;
            return {
                totalQty: total,
                cart: filteredCart,
            }
        default:
            return state;
    }
};
export default CartReducer;
