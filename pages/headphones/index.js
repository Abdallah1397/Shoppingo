import { useDispatch } from "react-redux";
import { addOneProduct } from '../../redux/actions/cart'
import Title from "../../components/Title/Title";
import Product from "../../components/product/product";

// Headphones Page
const Headphones = (props) => {
    // Dispatch Declaration
    const dispatch = useDispatch();
    return (
        <div>
            <div className="container">
                <Title title="Headphones Products" />
                {/* Headphones products */}
                <div className="products">
                    {props.headphones.map((item, index) => (
                        <Product
                            key={index}
                            title={item.title}
                            href={`headphones/${item.id}`}
                            src={item.image}
                            rate={item.rate}
                            price={item.price}
                            onClick={() => dispatch(addOneProduct(item))}
                        />
                    ))}
                </div>
            </div>
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
