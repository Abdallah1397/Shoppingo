import { useDispatch } from "react-redux";
import { addOneProduct } from "../redux/actions/cart";
import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import Product from "../components/product/product";
import Hero from "../components/Hero/Hero";
const AllProducts = (props) => {
  // disptach
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <Title title={"all products"} />
        <div className={styles.ourCategories}>
          {props.allProducts.map((item, index) => (
            <Product
              key={index}
              title={item.title}
              src={item.image}
              href={`/${item.href}/${item.id}`}
              price={item.price}
              rate={item.rate}
              onClick={() => dispatch(addOneProduct(item))}
            />
          ))}
        </div>
      </div>
      <Hero />
    </div>
  );
};
export default AllProducts;
// get all data by using getStaticProps
export async function getStaticProps() {
  const res1 = await fetch("http://127.0.0.1:3000/api/bags");
  const res2 = await fetch("http://127.0.0.1:3000/api/shirts");
  const res3 = await fetch("http://127.0.0.1:3000/api/headphones");
  const bags = await res1.json();
  const shirts = await res2.json();
  const headphones = await res3.json();
  const allProducts = [...bags, ...shirts, ...headphones];
  return {
    props: {
      allProducts,
    },
  };
}
