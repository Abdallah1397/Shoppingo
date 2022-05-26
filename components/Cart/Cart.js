import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../redux/actions/cartStatus";
import Image from "next/image";
import styles from "./cart.module.css";
import EmptyCart from "../../public/assets/emptyCart.jpg";
// Cart Component
const Cart = () => {
    const dispatch = useDispatch();
    // get Cart data
    const cartData = useSelector((state) => state.cart);
    // get CartStatus State
    const cartStatus = useSelector((state) => state.cartStatus.cartStatus);
    // closeCart
    const closeCart = () => {
        dispatch(toggleCart());
    }
    return (
        // Check State to make the cart visible 
        <div id="cart" className={cartStatus ? (styles.mainViewVisible) : (styles.mainViewNotVisible)}>
            {/* check state to control cart translateX 0 | 100 */}
            <div className={cartStatus ? (styles.cartTranslate_0) : (styles.cartTranslate_100)}>
                {/* Cart Header */}
                <div className={styles.cartHeader}>
                    <p className={styles.title}>Your Cart</p>
                    <p className={styles.closeIcon}>
                        <i className="fa fa-times fa-lg" aria-hidden="true" onClick={closeCart}></i>
                    </p>
                </div>
                {/* Check if cart is empty or not */}
                {cartData.totalQTY > 0 ? (
                    // if cart is not empty we will display the cart items and total price
                    <div>

                    </div>
                ) : (
                    // if not we will display cart is empty
                    <div className={styles.emptyCart}>
                        <Image
                            src={EmptyCart}
                            alt="Empty Cart"
                            width="100"
                            height="100"
                            layout="responsive"
                        />
                        <p>Your Shopping Cart is Empty</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Cart;
