import { TOGGLE_CART, CLOSE_CART } from "../types/cartStatus";

// Toggle Cart View
export const toggleCart = () => ({
    type: TOGGLE_CART,
});

// Close Cart View
export const closeCart = () => ({
    type: CLOSE_CART,
})