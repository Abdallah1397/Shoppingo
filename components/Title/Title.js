import styles from "./title.module.css";

// Title Component
const Title = ({ title, id }) => {
    return (
        <div className={styles.titleComponet} id={id}>
            <div className={styles.titleLine} />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.titleLine} />
        </div>
    );
};
export default Title;
