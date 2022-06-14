import { CLOSE_OVERLAY_NAVBAR, TOGGLE_OVERLAY_NAVBAR } from '../types/overlayNavbar';

// close overlay navbar
export const closeOverlayNavbar = () => ({
    type: CLOSE_OVERLAY_NAVBAR,
});
// toggle state of OverLay
export const toggleOverlayNavbar = () => ({
    type: TOGGLE_OVERLAY_NAVBAR,
})