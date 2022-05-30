import { ADD_PRODUCT, REMOVE_PRODUCT } from "../types/cart"

// Action Creator => Function return action
// addProduct => contains item = product details and qty = added item quantity
export const addProduct = (item, qty) => {
    return {
        type: ADD_PRODUCT,
        payload: item,
        quantity: qty,
    }
}
// Remove Product
export const removeProduct = (item) => {
    return {
        type: REMOVE_PRODUCT,
        payload: item,
    }
}