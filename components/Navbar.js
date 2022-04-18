import Link from "next/link";
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div>
                <h1>Online Shopping</h1>
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
        </nav>
    );
};
export default Navbar;
