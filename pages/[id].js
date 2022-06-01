import { useState } from 'react';
import { useDispatch } from "react-redux";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { addProduct } from "../redux/actions/cart";


// Product Details Page
const SingleProduct = (props) => {
    const dispatch = useDispatch();
    // state to get the qty number
    const [qtyNum, setQtyNum] = useState(1);
    // qty change function
    const onQtyChange = (e) => {
        setQtyNum(parseInt(e.target.value));
    }
    return (
        <div>
            <ProductDetails
                image={props.bag.image}
                title={`${props.bag.title} Tote`}
                price={props.bag.price}
                desc={props.bag.desc}
                onChange={onQtyChange}
                onClick={() => dispatch(addProduct(props.bag, qtyNum))}
                rate={props.bag.rate}
            />
        </div>
    );
};
export default SingleProduct;

// Get Product Details by getStaticPaths to give getStaticProps avalibilty to get paths
// Next.js will statically pre-render all the paths specified by getStaticPaths
export async function getStaticPaths() {
    // get all data
    const res = await fetch("http://127.0.0.1:3000/api/bags");
    const bags = await res.json();
    // getPaths
    const paths = bags.map((item) => {
        return {
            params: { id: `${item.id}` },
        };
    });
    return {
        paths: paths,
        fallback: false, // any paths not returned by getStaticPaths will result in a 404 page
    };
}
// getStaticProps with context as a props, context contains params.id from url "dynamic id" 
export async function getStaticProps(context) {
    const res = await fetch(
        `http://127.0.0.1:3000/api/bags/${context.params.id}`
    );
    const bag = await res.json();
    return {
        props: { bag },
    };
}
