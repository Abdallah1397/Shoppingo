import { AiOutlineStar } from 'react-icons/ai';
import styles from './Hero.module.css';


// Hero Compoent
const Hero = () => {
    return (
        <div className={styles.hero}>
            <h3 className={styles.hero_discount}>Extra <span className={styles.discountSpan}><AiOutlineStar className={styles.discountStars} /> 30% Off <AiOutlineStar className={styles.discountStars} /></span> Online</h3>
            <h3 className={styles.hero_lifeStyle}>LifeStyle Collection</h3>
            <p className={styles.hero_freeShipping}>Free Shipping on Orders Over $99</p>
        </div>
    )
}
export default Hero;