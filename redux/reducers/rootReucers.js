import { combineReducers } from "redux";
import CartReducer from './cart';

const rootReducers = combineReducers({
    cart: CartReducer,
})
export default rootReducers;