import Image from "next/image";
import Link from "next/link";
import styles from "./Category.module.css";

// Category Component
const Category = (props) => {
    return (
        <Link href={props.href} passHref>
            <div className={styles.categoryWrapper}>
                <Image
                    src={props.src}
                    alt={props.title}
                    width="100px"
                    height="100px"
                    layout="responsive"
                />
                <div className={styles.categoryTitleWrapper}>
                    <h5 className={styles.categoryTitle}>{props.title}</h5>
                </div>
            </div>
        </Link>
    );
};
export default Category;
