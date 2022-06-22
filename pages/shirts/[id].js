import { useState } from "react";
import { addProduct } from "../../redux/actions/cart";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

// Single Shirt Page
const SingleShirt = ({ shirt }) => {
    // qty state
    const [qtyState, setQtyState] = useState(1);
    // handle qty change
    const handleQtyChange = (e) => {
        setQtyState(e.target.value);
    };
    return (
        <div className="container">
            <ProductDetails
                image={shirt.image}
                title={shirt.title}
                price={shirt.price}
                desc={shirt.desc}
                rate={shirt.rate}
                onChange={handleQtyChange}
                onClick={() => dispatch(addProduct(shirt, qtyState))}
            />
        </div>
    );
};
export default SingleShirt;

// get all paths
export async function getStaticPaths() {
    const res = await fetch("http://127.0.0.1:3000/api/shirts");
    const shirts = await res.json();
    // get paths
    const paths = shirts.map((item) => {
        return {
            params: { id: `${item.id}` },
        };
    });
    console.log(paths);
    return {
        paths: paths,
        fallback: false,
    };
}

// getSingle Shirt
export async function getStaticProps(context) {
    const res = await fetch(
        `http://127.0.0.1:3000/api/shirts/${context.params.id}`
    );
    const shirt = await res.json();
    return {
        props: { shirt },
    };
}
