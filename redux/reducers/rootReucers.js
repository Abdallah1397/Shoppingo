import { combineReducers } from "redux";
import CartReducer from './cart';
import cartStatusReducer from "./cartStatus";
import setCurrnetPageReducer from "./paginate";

const rootReducers = combineReducers({
    cart: CartReducer,
    cartStatus: cartStatusReducer,
    currentPage: setCurrnetPageReducer,
})
export default rootReducers;