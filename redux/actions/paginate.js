import { SET_PAGE } from "../types/paginate"

// Paginate Action Creator
export const setPage = (currentPage) => ({
    type: SET_PAGE,
    payload: currentPage,
})