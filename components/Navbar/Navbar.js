import Link from "next/link";
import OverlayNav from "../OverlayNav/OverLayNav";
import styles from "./Navbar.module.css";

// NavbarComponent
const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                {/* Logo */}
                <div className={styles.logo}>
                    <h1>
                        <Link href="/">Shoppingo</Link>
                    </h1>
                </div>
                {/* Items */}
                <ul className={styles.navbar_items}>
                    <li>
                        <Link href="/">Shop</Link>
                    </li>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
                {/* Icons */}
                <ul className={styles.nav_icons}>
                    <li className={styles.icon}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </li>
                    <li className={styles.icon}>
                        <i className="fa fa-bars"></i>
                    </li>
                </ul>
            </nav>
            {/* <OverlayNav /> */}
        </>
    );
};
export default Navbar;
