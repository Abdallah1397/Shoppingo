import { useState } from "react";
import Link from "next/link";
import styles from "./OverlayNav.module.css";
import { Link as LinkScroll, animateScroll } from "react-scroll";

// Navigation compontent that appears in responsive view
const OverlayNav = () => {
    // close navigiton bar
    const closeNavigationBar = () => {
        document.getElementById("myNav").style.width = "0";
    };
    return (
        <div className={styles.navigation} id="myNav">
            {/* Close Icon */}
            <div className={styles.closeIcon}>
                <i
                    className="fa fa-times"
                    aria-hidden="true"
                    onClick={closeNavigationBar}
                ></i>
            </div>
            {/* items */}
            <div className={styles.items}>
                <h3 onClick={closeNavigationBar}>
                    <Link href="/">Shop</Link>
                </h3>
                <h3 onClick={closeNavigationBar}>
                    <Link href="/about">About us</Link>
                </h3>
                <div>
                    <h3 onClick={closeNavigationBar}>
                        <Link href="/contact">Contact</Link>
                    </h3>
                </div>
            </div>
            {/* Logo */}
            <div className={styles.logo}>
                <h1>Shoppingo</h1>
            </div>
        </div>
    );
};
export default OverlayNav;
