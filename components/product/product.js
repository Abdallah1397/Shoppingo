import Link from "next/link";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import styles from "./product.module.css";
import DynamicStars from '../DynamicStars/DynamicStars'

// It's a component to display the main product view
const Product = (props) => {
    return (
        <div className={styles.product}>
            {/*Product Image  */}
            <Link href={props.href} passHref>
                <a>
                    <Image
                        src={props.src}
                        layout="responsive"
                        width="10"
                        height="10"
                        alt={props.title}
                        className={styles.productImage}
                        quality={100}
                    />
                </a>
            </Link>
            {/* Product Information */}
            <div className={styles.informations}>
                {/* Title and Add Button */}
                <div className={styles.informationsHeader}>
                    {/* Title */}
                    <h3 className={styles.informationsHeader_Title}>
                        {props.title}
                    </h3>
                    {/* Cart Icon */}
                    <div className={styles.informationsHeader_cartIcon}>
                        <AiOutlineShopping size={"1.4rem"} onClick={props.onClick} />
                    </div>
                </div>
                {/* Price & rate */}
                <div className={styles.informationsFooter}>
                    <h4 className={styles.informationsFooter_price}>${props.price}</h4>
                    <DynamicStars rate={props.rate} />
                </div>
            </div>
        </div>
    );
};
export default Product;
