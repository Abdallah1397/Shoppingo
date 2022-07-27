import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa';
import { closeOverlayNavbar } from "../../redux/actions/overlayNavbar";
import styles from "./OverlayNav.module.css";

// Navigation compontent that appears in responsive view
const OverlayNav = () => {
    //   Dispatch Declartion
    const dispatch = useDispatch();
    // get overlaynav state
    const overlayNavState = useSelector(
        (state) => state.overlayStatus.overlayStatus
    );
    // close navigiton bar
    const closeNavigationBar = () => {
        dispatch(closeOverlayNavbar());
    };
    return (
        <div
            className={
                overlayNavState
                    ? styles.navigation + " " + styles.showNavigation
                    : styles.navigation
            }
        >
            <div className="container">
                {/* items */}
                <div className={styles.itemsWrapper}>
                    <h3 onClick={closeNavigationBar} className={styles.item}>
                        <Link href="/">Shop</Link>
                    </h3>
                    <h3 onClick={closeNavigationBar} className={styles.item}>
                        <Link href="/allProducts">Products</Link>
                    </h3>
                    <h3 onClick={closeNavigationBar} className={styles.item}>
                        <Link href="/about">About us</Link>
                    </h3>
                    <h3 onClick={closeNavigationBar} className={styles.item}>
                        <Link href="/contact">Contact</Link>
                    </h3>
                </div>
            </div>
            {/* Logo */}
            <div className={styles.logo}>
                <h1>Shoppingo</h1>
                {/* Social Media Icons */}
            </div>
        </div>
    );
};
export default OverlayNav;
