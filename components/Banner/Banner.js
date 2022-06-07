import styles from "./Banner.module.css";
import contactBanner from '../../public/assets/banners/contactBanner.png';

// Banner Componet
const Banner = ({ bannerBackground }) => {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${bannerBackground.src})` }}
        >
        </div>
    )
};
export default Banner;
