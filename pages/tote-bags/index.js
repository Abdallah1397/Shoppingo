import { useDispatch, useSelector } from "react-redux";
import { addOneProduct } from '../../redux/actions/cart'
import Product from "../../components/product/product";
import Title from "../../components/Title/Title";
import Banner from '../../components/Banner/Banner';
import ToteBags from '../../public/assets/banners/toteBags.png';




// Tote Bags Page
const Bags = ({ bags }) => {
    // Dispatch Declaration
    const dispatch = useDispatch();
    // test
    const cartState = useSelector((state) => state.cart.cart);
    console.log(cartState);
    return (
        <div>
            <Banner bannerBackground={ToteBags} />
            <div className="container">
                <Title title="Tote bags" />
                <div className="products">
                    {bags.map((item, index) => (
                        <Product
                            key={index}
                            title={item.title}
                            src={item.image}
                            href={`/tote-bags/${item.id}`}
                            price={item.price}
                            rate={item.rate}
                            onClick={() => dispatch(addOneProduct(item))}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Bags;

// get all data with getStaticProps
// this function gets called at buil server side
export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:3000/api/bags");
    const bags = await res.json();
    // by returning {props:{bags}}, the Bags component will recive bags as a prop at build time
    return {
        props: {
            bags,
        },
    };
}
