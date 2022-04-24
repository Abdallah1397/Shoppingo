import Image from "next/image";
import styles from "./product.module.css";
const Product = (props) => {
    return (
        <div key={props.key} className={styles.product}>
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
                    <h4>
                        {props.price}
                    </h4>
                </div>
            </div>
        </div>
    );
};
export default Product;
