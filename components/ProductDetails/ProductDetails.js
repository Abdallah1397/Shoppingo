import Image from "next/image";
import DynamicStars from "../DynamicStars/DynamicStars";
import Title from '../Title/Title';
import styles from "./ProductDetails.module.css";
// It's a componet to display the product details
const ProductDetails = (props) => {
    return (
        <div className="container">
            {/* Title */}
            <Title title={props.title} />
            <div className={styles.productDetails}>
                {/* Image */}
                <div className={styles.imageWrapper}>
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
                <div className={styles.detailsWrapper}>
                    {/* Main Details Part */}
                    <div className={styles.mainDetails}>
                        {/* Product Title */}
                        <span className={styles.mainDetails_Title}>{props.title}</span>
                        {/* Product Price */}
                        <h4 className={styles.mainDetails_Price}>${props.price}</h4>
                        {/* Starts */}
                        <DynamicStars rate={props.rate} />
                        {/* Product Description */}
                        <p className={styles.mainDetails_Description}>{props.desc}</p>
                        {/* Product Qty */}
                        <span className={styles.mainDetails_Qty}>Qty</span>
                        <input
                            type="number"
                            pattern="[0-9]*"
                            aria-label="Quantity"
                            max="10"
                            min="1"
                            defaultValue="1"
                            onChange={props.onChange}
                            className={styles.qtyNumber}
                        />
                    </div>
                    {/* cart button */}
                    <div>
                        <button className={styles.addToCartBtn} onClick={props.onClick}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;
