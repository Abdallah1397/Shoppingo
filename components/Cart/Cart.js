import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../redux/actions/cartStatus";
import Image from "next/image";
import styles from "./cart.module.css";
import EmptyCart from "../../public/assets/emptyCart.jpg";
// Cart Component
const Cart = () => {
    // total price
    const total = 0;
    const dispatch = useDispatch();
    // get Cart data
    const cartData = useSelector((state) => state.cart);
    // get CartStatus State
    const cartStatus = useSelector((state) => state.cartStatus.cartStatus);
    // closeCart
    const closeCart = () => {
        dispatch(toggleCart());
    };
    return (
        // Check State to make the cart visible
        <div
            id="cart"
            className={
                cartStatus
                    ? styles.show + " " + styles.cartMainView
                    : styles.cartMainView
            }
        >
            {/* check state to control cart translateX 0 | 100 */}
            <div
                className={
                    cartStatus
                        ? styles.cartTranslate + " " + styles.cartTranslate_0
                        : styles.cartTranslate
                }
            >
                {/* Cart Header */}
                <div className={styles.cartHeader}>
                    <p className={styles.title}>Your Cart</p>
                    <p className={styles.closeIcon}>
                        <i
                            className="fa fa-times fa-lg"
                            aria-hidden="true"
                            onClick={closeCart}
                        ></i>
                    </p>
                </div>
                <div className={styles.cartContent}>
                    {/* Check if cart is empty or not */}
                    {cartData.totalQty > 0 ? (
                        // if cart is not empty we will display the cart items and total price
                        cartData.cart.map((item) => {
                            total += item.price * item.qty;
                            return (
                                <div key={item.id} className={styles.cartItem}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width="100"
                                        height="100"
                                    />
                                    <div>
                                        <h5>{item.title} Tote</h5>
                                        <span>
                                            {item.qty}x{item.price}
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        // if not we will display cart is empty
                        <div className={styles.emptyCart}>
                            <Image
                                src={EmptyCart}
                                alt="Empty Cart"
                                width="200"
                                height="200"
                                layout="responsive"
                            />
                            <p>Your Shopping Cart is Empty</p>
                        </div>
                    )}
                </div>
                {/* Total  */}
                <div className={styles.totalWrapperDiv}>Total is $ {total}</div>
            </div>
        </div>
    );
};
export default Cart;