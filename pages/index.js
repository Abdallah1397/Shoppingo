import { useDispatch } from 'react-redux';
import { addOneProduct } from '../redux/actions/cart'
import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import Category from "../components/Categories/Category";
import About from "../components/About/About";
import Shirt from "../public/assets/categories/shirt.jpg";
import HeadPhone from "../public/assets/categories/headPhones.jpg";
import ToteBags from "../public/assets/bags/colorful.png";
import Product from "../components/product/product";
import Hero from '../components/Hero/Hero';

// Home Page
export default function Home(props) {
  // disptach 
  const dispatch=useDispatch();
  const bestSellingProducts = props.allProducts.filter(
    (item) => item.bestSales === true
  );
  const ourFeaturedProducts = props.allProducts.filter(
    (item) => item.featured === true
  );
  return (
    <div>
      {/* Main Banner */}
      <div className={styles.mainBanner} />
      {/* Categories */}
      <div className="coloredDiv">
        <div className="container">
          {/* title */}
          <Title title="Browse our categories" />
          {/* Our Categories */}
          <div className={styles.ourCategories}>
            <Category src={Shirt} title="Shirts" href="/shirts" />
            <Category src={HeadPhone} title="Headphones" href="/headphones" />
            <Category src={ToteBags} title="Tote Bags" href="/tote-bags" />
          </div>
        </div>
      </div>
      {/* Best Selling Products Products */}
      <div className="container">
        <Title title={"Best Selling"} />
        <div className={styles.ourCategories}>
          {bestSellingProducts.map((item, index) => (
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
      {/* Our Features Products */}
      <div className="container">
        <Title title={"OUR Featured"} />
        <div className={styles.ourCategories}>
          {ourFeaturedProducts.map((item, index) => (
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
    </div>
  );
}
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
