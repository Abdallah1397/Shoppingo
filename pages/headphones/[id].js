import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/cart";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

// Single Headphone Page
const SingleHeadphone = (props) => {
    // Dispatch Declaration
    const dispatch = useDispatch();
    // qtyState
    const [qtyState, setQtyState] = useState(1);
    // handleQtyChange
    const handleQtyChange = (e) => {
        setQtyState(parseInt(e.target.value));
    };
    return (
        <div className="container">
            <ProductDetails
                title={props.headphone.title}
                image={props.headphone.image}
                rate={props.headphone.rate}
                price={props.headphone.price}
                onChange={handleQtyChange}
                onClick={() => dispatch(addProduct(props.headphone, qtyState))}
            />
        </div>
    );
};
export default SingleHeadphone;

// Get all headphones paths by using getStaticPaths function
export async function getStaticPaths() {
    const res = await fetch("http://127.0.0.1:3000/api/headphones");
    const headphones = await res.json();
    // getPaths
    const paths = headphones.map((item) => {
        return {
            params: {
                id: `${item.id}`,
            },
        };
    });
    return {
        paths: paths,
        fallback: false,
    };
}

// get static data for the selected id
export async function getStaticProps(context) {
    const res = await fetch(
        `http://127.0.0.1:3000/api/headphones/${context.params.id}`
    );
    const headphone = await res.json();
    return {
        props: {
            headphone,
        },
    };
}
