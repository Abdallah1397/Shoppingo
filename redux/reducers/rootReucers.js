import { combineReducers } from "redux";
import CartReducer from './cart';
import cartStatusReducer from "./cartStatus";

const rootReducers = combineReducers({
    cart: CartReducer,
    cartStatus: cartStatusReducer,
})
export default rootReducers;