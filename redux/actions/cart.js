import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_ONE_PRODUCT } from "../types/cart"

// Action Creator => Function return action
// Add One Product
export const addOneProduct = (item) => {
    return {
        type: ADD_ONE_PRODUCT,
        payload: item,
    }
}
// addProduct with qty => contains item = product details and qty = added item quantity
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