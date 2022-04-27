import Image from "next/image";
import styles from "./ProductDetails.module.css";
// It's a componet to display the product details
const ProductDetails = (props) => {
    return (
        <div className={styles.productDetails}>
            {/* Image & Details */}
            <div>
                <div className={styles.imageDiv}>
                    <Image layout="responsive" width="10" height="10" sizes="100vw" alt={props.title} src={props.image} />
                </div>
                <h5>{props.title}</h5>
            </div>

        </div>
    )
}
export default ProductDetails;