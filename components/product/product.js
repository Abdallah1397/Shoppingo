import Link from "next/link";
import Image from "next/image";
import styles from "./product.module.css";

// It's a component to display the main product view
const Product = (props) => {
    return (
        <div className={styles.product}>
            {/*Product Image  */}
            <Image
                src={props.src}
                layout="responsive"
                width="10"
                height="10"
                alt={props.title}
            />
            <div className={styles.informations}>
                {/* Title */}
                <h3>{props.title} Tote</h3>
                {/* Line */}
                <div>
                    <span />
                </div>
                {/* Price */}
                <div>
                    <h4>{props.price}</h4>
                </div>
            </div>
            {/* Details Section */}
            <div className={styles.details}>
                <Link href={`/${props.id}`}>More Details</Link>
            </div>
        </div>
    );
};
export default Product;
