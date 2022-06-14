import {
    CLOSE_OVERLAY_NAVBAR,
    TOGGLE_OVERLAY_NAVBAR,
} from "../types/overlayNavbar";

const INITIAL_STATE = {
    overlayStatus: false,
};

const overlayNavbarReducer = (state = INITIAL_STATE, actions) => {
    // destructuring state object
    const { type } = actions;
    switch (type) {
        case TOGGLE_OVERLAY_NAVBAR:
            return { overlayStatus: !state.overlayStatus };
        case CLOSE_OVERLAY_NAVBAR:
            return { overlayStatus: false };
        default:
            return state;
    }
};
export default overlayNavbarReducer;
