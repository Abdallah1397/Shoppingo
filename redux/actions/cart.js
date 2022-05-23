import { ADD_PRODUCT, REMOVE_PRODUCT } from "../types/cart"

// Action Creator => Function return action
export const addProduct = (item) => {
    return {
        type: ADD_PRODUCT,
        payload: item,
    }
}