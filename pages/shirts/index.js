import { useDispatch } from 'react-redux';
import { addOneProduct } from '../../redux/actions/cart';
import Product from "../../components/product/product";
import Title from "../../components/Title/Title";


// Shirts Products Page
const Shirts = ({ shirts }) => {
    // Dispatch Declaration
    const dispatch = useDispatch();
    return (
        <div>
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
                            href={`/shirts/${item.id}`}
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