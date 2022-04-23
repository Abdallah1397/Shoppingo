import Link from "next/link";
import styles from "./Navbar.module.css";

// NavbarComponent
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div className={styles.logo}>
                <h1>Shoppingo</h1>
            </div>
            {/* Items */}
            <ul className={styles.navbar_items}>
                <li>
                    <Link href="#">Item1</Link>
                </li>
                <li>
                    <Link href="#">Item2</Link>
                </li>
                <li>
                    <Link href="#">Item3</Link>
                </li>
            </ul>
            {/* Icons */}
            <ul className={styles.nav_icons}>
                <li className={styles.icon}>
                    <i className="fa fa-bars"></i>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
