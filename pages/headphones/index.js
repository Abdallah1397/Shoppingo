import { useDispatch } from "react-redux";
import { addOneProduct } from '../../redux/actions/cart';
import Banner from '../../components/Banner/Banner';
import Title from "../../components/Title/Title";
import Product from "../../components/product/product";
import HeadphoneBanner from '../../public/assets/banners/headphonesBanner.jpeg';
import Hero from "../../components/Hero/Hero";

// Headphones Page
const Headphones = (props) => {
    // Dispatch Declaration
    const dispatch = useDispatch();
    return (
        <div>
            {/* Main Banner */}
            <Banner bannerBackground={HeadphoneBanner} />
            <div className="container">
                <Title title="Headphones Products" />
                {/* Headphones products */}
                <div className="products">
                    {props.headphones.map((item, index) => (
                        <Product
                            key={index}
                            title={item.title}
                            href={`${item.href}/${item.id}`}
                            src={item.image}
                            rate={item.rate}
                            price={item.price}
                            onClick={() => dispatch(addOneProduct(item))}
                        />
                    ))}
                </div>
            </div>
            <Hero />
        </div>
    );
};
export default Headphones;

// get headphones by using getStaticProps
export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:3000/api/headphones");
    const headphones = await res.json();
    return {
        props: {
            headphones,
        },
    };
}
