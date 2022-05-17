import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import OverlayNav from "../OverlayNav/OverLayNav";

// NavbarComponent
const Navbar = () => {
    // toggleFunction
    const openNavigationBar = () => {
        document.getElementById("myNav").style.width = "100%";
    };

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
                        <i className="fa fa-bars" onClick={openNavigationBar}></i>
                    </li>
                </ul>
                <OverlayNav />
            </nav>
        </>
    );
};
export default Navbar;
