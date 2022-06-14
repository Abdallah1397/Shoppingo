import { combineReducers } from "redux";
import CartReducer from './cart';
import cartStatusReducer from "./cartStatus";
import setCurrnetPageReducer from "./paginate";
import setOverlayNavbarReducer from './overlayNavbar';

const rootReducers = combineReducers({
    cart: CartReducer,
    cartStatus: cartStatusReducer,
    currentPage: setCurrnetPageReducer,
    overlayStatus: setOverlayNavbarReducer,
})
export default rootReducers;