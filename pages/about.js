import Banner from "../components/Banner/Banner";
import Title from "../components/Title/Title";
import AboutBanner1 from "../public/assets/banners/aboutBanner1.png";
import styles from "../styles/aboutUs.module.css";
import About1 from "../public/assets/about1.png";
import about2 from "../public/assets/about2.png";
import Image from "next/image";
import Customers from "../components/Customers/Customers";

// About US Page
const AboutUs = () => {
    return (
        <div>
            {/* Main Banner */}
            <Banner bannerBackground={AboutBanner1} />
            <div className="container">
                {/* About US Title */}
                <Title title="About US" />
                {/* Main Topic */}
                <div className={styles.aboutUSMainDiv}>
                    <div className={styles.aboutUsTopic}>
                        <h3 className={styles.mainTitle}>Who We Are ?</h3>
                        <p className={styles.subTitle}>
                            Hello and welcome to Shoppingo, the place to find the best
                            products for every taste and occasion. We thoroughly check the
                            quality of our goods, working only with reliable suppliers so that
                            you only receive the best quality product.
                        </p>
                        <p className={styles.subTitle}>
                            We at Shoppingo believe in high quality and exceptional customer
                            service. But most importantly, we believe shopping is a right, not
                            a luxury, so we strive to deliver the best products at the most
                            affordable prices, and ship them to you regardless of where you
                            are located.
                        </p>
                    </div>
                    <div className={styles.aboutImage}>
                        <Image
                            src={about2}
                            alt="about2Image"
                            width="200"
                            height="200"
                            layout="responsive"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            {/* Customers Slider */}
            <Customers />
        </div>
    );
};
export default AboutUs;
