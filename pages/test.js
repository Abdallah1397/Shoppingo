import Product from "../components/product/product";
import Title from "../components/Title/Title";


const Test = ({ bags }) => {
    return (
        <div>
            {bags.map((item, index) => (
                <Product
                    key={index}
                    title={item.title}
                    id={item.id}
                    price={item.price}
                    rate={item.rate}
                    src={item.image}
                />
            ))}
        </div>
    )
}
export default Test;

export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:3000/api/bags");
    const bags = await res.json();

    return {
        props: {
            bags,
        }
    }
}