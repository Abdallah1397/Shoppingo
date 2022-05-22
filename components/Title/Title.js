import styles from "./title.module.css"
const Title = ({ title, id }) => {
    return (
        <div className={styles.title} id={id}>
            <div />
            <h1>{title}</h1>
            <div />
        </div>
    );
};
export default Title;
