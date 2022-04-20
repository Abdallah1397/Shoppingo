import styles from "../styles/title.module.css";
const Title = ({ title }) => {
    return (
        <div className={styles.title}>
            <div />
            <h1>{title}</h1>
            <div />
        </div>
    );
};
export default Title;
