import { useDispatch, useSelector } from 'react-redux';
import { addOneProduct } from '../../redux/actions/cart';
import Product from "../../components/product/product";
import Title from "../../components/Title/Title";
import Banner from '../../components/Banner/Banner';
import ShirtsBanner from '../../public/assets/banners/shirts1.png';
import Hero from '../../components/Hero/Hero';


// Shirts Products Page
const Shirts = ({ shirts }) => {
    // Dispatch Declaration
    const dispatch = useDispatch();
    
    return (
        <div>
            <Banner bannerBackground={ShirtsBanner} />
            <div className="container">
                {/* Page Title */}
                <Title title="Shirts Products" />
                {/* All Products */}
                <div className="products">
                    {shirts.map((item, index) => (
                        <Product
                            key={index}
                            title={item.title}
                            src={item.image}
                            href={`${item.href}/${item.id}`}
                            price={item.price}
                            rate={item.rate}
                            onClick={() => dispatch(addOneProduct(item))}
                        />
                    ))}
                </div>
                <Hero />
            </div>

        </div>
    )
}
export default Shirts;

// get all shirts
export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:3000/api/shirts");
    const shirts = await res.json();
    return {
        props: {
            shirts,
        }
    }
}