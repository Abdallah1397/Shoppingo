import Image from "next/image";
import styles from "./ProductDetails.module.css";
// It's a componet to display the product details
const ProductDetails = (props) => {
    return (
        <div className={styles.productDetails}>
            {/* Image */}
            <div className={styles.productDiv}>
                <div className={styles.imageDiv}>
                    <Image
                        className={styles.image}
                        alt={props.title}
                        src={props.image}
                        width="10"
                        height="10"
                        layout="responsive"
                    />
                </div>
            </div>
            {/* Details */}
            <div className={styles.details}>
                <h4>{props.title} Tote</h4>
                <p>{props.desc}</p>
                <span>{props.price}</span>
                <span>Quantity</span>
                <input
                    type="number"
                    pattern="[0-9]*"
                    aria-label="Quantity"
                    max="10"
                    min="1"
                    defaultValue="1"
                    onChange={props.onChange}
                />
                {/* cart button */}
                <div>
                    <button className={styles.addToCartBtn} onClick={props.onClick}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;
