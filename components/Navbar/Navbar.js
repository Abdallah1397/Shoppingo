import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { Link as LinkScroll, animateScroll } from "react-scroll";
import styles from "./Navbar.module.css";
import OverlayNav from "../OverlayNav/OverLayNav";
import Cart from "../Cart/Cart";

// NavbarComponent
const Navbar = () => {
    // number of items in cart
    const qty = useSelector(state => state.cart.totalQty);
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
                        <LinkScroll
                            to="about"
                            smooth={true}
                            offset={-95}
                            duration={1000}
                            spy={true}
                        >
                            About
                        </LinkScroll>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
                {/* Icons */}
                <ul className={styles.nav_icons}>
                    <li className={styles.icon}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span className={styles.spanNumber}>{qty}</span>
                    </li>
                    <li className={styles.icon}>
                        <i className="fa fa-bars" onClick={openNavigationBar}></i>
                    </li>
                </ul>
                <OverlayNav />
            </nav>
            {/* <Cart /> */}

        </>
    );
};
export default Navbar;
