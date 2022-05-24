import { useSelector } from "react-redux";
import styles from "./cart.module.css";
// Cart Component
const Cart = () => {
    // get Cart data
    const cartData = useSelector((state) => state.cart);
    console.log(cartData);
    return (
        <div id="cart" className={styles.cartView}>
            <h3>
                {cartData.totalQty} items
            </h3>
        </div>
    );
};
export default Cart;
