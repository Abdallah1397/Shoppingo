import Slider from 'react-slick';
import Image from 'next/image';
import styles from './ClinetsSlider.module.css';
import Title from '../Title/Title';
import logo1 from '../../public/assets/clients/1.png';
import logo2 from '../../public/assets/clients/2.png';
import logo3 from '../../public/assets/clients/3.png';
import logo4 from '../../public/assets/clients/4.png';
import logo5 from '../../public/assets/clients/5.png';
import logo6 from '../../public/assets/clients/6.png';


// Clients Slider Component
const ClientsSlider = () => {
    // Slider Setting Declartion
    let settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        easing: 'linear',
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
            }
        ]
    };
    return (
        <div className={styles.clientSlider}>
            {/* Slider Title */}
            <Title title={"Our Clients"} />
            <Slider {...settings} className={styles.slider}>
                <div>
                    <Image src={logo1} alt="logo1" width="180" height="100" quality={100} />
                </div>
                <div>
                    <Image src={logo2} alt="logo1" width="180" height="100" quality={100} />
                </div>
                <div>
                    <Image src={logo3} alt="logo1" width="180" height="100" quality={100} />
                </div>
                <div>
                    <Image src={logo4} alt="logo1" width="180" height="100" quality={100} />
                </div>
                <div>
                    <Image src={logo5} alt="logo1" width="180" height="100" quality={100} />
                </div>
                <div>
                    <Image src={logo6} alt="logo1" width="180" height="100" quality={100} />
                </div>
            </Slider>
        </div>
    )
}
export default ClientsSlider;