import ReactStars from 'react-stars';
import styles from './dynamicStars.module.css';


// Dynamic Stars Componet
const DynamicStars = ({ rate }) => {
    return (
        <div className={styles.dynamicStarsWrapper}>
            <ReactStars count={5} value={rate} color2={"#eda634"} edit={false} size={20} />
        </div>
    )
}
export default DynamicStars;