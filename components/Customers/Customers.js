import Slider from "react-slick";
import Image from "next/image";
import Title from "../Title/Title";
import DynamicStars from "../DynamicStars/DynamicStars";
import styles from "./customers.module.css";
import avatar1 from "../../public/assets/avatars/avatar1.png";
import avatar2 from "../../public/assets/avatars/avatar2.png";
import avatar3 from "../../public/assets/avatars/avatar3.jpg";
import avatar4 from "../../public/assets/avatars/avatar4.png";
import avatar5 from "../../public/assets/avatars/avatar5.jpg";
// Customers Card Component
const Customers = () => {
    // Declare Slider Settings
    let settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        easing: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className={styles.customersSection}>
            <div className="container">
                <Title title="Our Customers" />
                <Slider {...settings} className={styles.slider}>
                    <div>
                        <div className={styles.customerCard}>
                            <Image src={avatar1} alt="avatar1" width="100px" height="100px" />
                            <h5 className={styles.customerName}>Customer 1</h5>
                            <p className={styles.customerOpinion}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod incididunt ut labore et dolore magna aliqua
                            </p>
                            <DynamicStars rate={3.5} />
                        </div>
                    </div>
                    <div>
                        <div className={styles.customerCard}>
                            <Image src={avatar2} alt="avatar2" width="100px" height="100px" />
                            <h5 className={styles.customerName}>Customer 2</h5>
                            <p className={styles.customerOpinion}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod incididunt ut labore et dolore magna aliqua
                            </p>
                            <DynamicStars rate={1.5} />
                        </div>
                    </div>
                    <div>
                        <div className={styles.customerCard}>
                            <Image src={avatar3} alt="avatar3" width="100px" height="100px" />
                            <h5 className={styles.customerName}>Customer 3</h5>
                            <p className={styles.customerOpinion}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod incididunt ut labore et dolore magna aliqua
                            </p>
                            <DynamicStars rate={5} />
                        </div>
                    </div>
                    <div>
                        <div className={styles.customerCard}>
                            <Image src={avatar4} alt="avatar4" width="100px" height="100px" />
                            <h5 className={styles.customerName}>Customer 4</h5>
                            <p className={styles.customerOpinion}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod incididunt ut labore et dolore magna aliqua
                            </p>
                            <DynamicStars rate={4.5} />
                        </div>
                    </div>
                    <div>
                        <div className={styles.customerCard}>
                            <Image src={avatar5} alt="avatar5" width="100px" height="100px" />
                            <h5 className={styles.customerName}>Customer 5</h5>
                            <p className={styles.customerOpinion}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod incididunt ut labore et dolore magna aliqua
                            </p>
                            <DynamicStars rate={2.5} />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};
export default Customers;
