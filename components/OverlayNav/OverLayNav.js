import Link from "next/link";
import styles from "./OverlayNav.module.css";

// Navigation compontent that appears in responsive view
const OverlayNav = () => {
    return (
        <div className={styles.navigation}>
            {/* Close Icon */}
            <div className={styles.closeIcon}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            {/* items */}
            <div className={styles.items}>
                <h3>
                    <Link href="/">Shop</Link>
                </h3>
                <h3>
                    <Link href="#">About</Link>
                </h3>
                <h3>
                    <Link href="#">Contact</Link>
                </h3>
            </div>
            {/* Logo */}
            <div className={styles.logo}>
                <h1>
                    Shoppingo
                </h1>
            </div>
        </div>
    );
};
export default OverlayNav;
