import ProductDetails from "../components/ProductDetails/ProductDetails";
const SingleProduct = (props) => {
    return (
        <div>
            <ProductDetails image={props.bag.image} title={props.bag.title} price={props.bag.price} desc={props.bag.desc} />
        </div>
    );
};
export default SingleProduct;

// Get Product Details by getStaticPaths Function but we should use getStaticProps
export async function getStaticPaths() {
    const res = await fetch("http://127.0.0.1:3000/api/bags");
    const bags = await res.json();
    const paths = bags.map((item) => {
        return {
            params: { id: `${item.id}` },
        };
    });
    return {
        paths: paths,
        fallback: false,
    };
}
export async function getStaticProps(context) {
    const res = await fetch(
        `http://127.0.0.1:3000/api/bags/${context.params.id}`
    );
    const bag = await res.json();
    return {
        props: { bag },
    };
}
