import Image from "next/image";
import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import Product from "../components/product/product";

export default function Home({ bags }) {
  return (
    <div>
      {/* Main Banner */}
      <div className={styles.mainBanner}>
        <div className={styles.title}>
          <h1>
            Shoppingo
            <br />
            Funky Printed Bags
          </h1>
        </div>
      </div>
      <div className="container">
        {/* title */}
        <Title title="Products" />
        {/* Products */}
        <div className={styles.products}>
          {bags.map((item, index) => {
            return (
              <Product key={index} title={item.title} src={item.image} id={item.id} price={item.price} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// get all data with getStaticProps
// this function gets called at build time on server side
export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/bags");
  const bags = await res.json();

  // by returning {props:{bags}}, the Home component will recive bags as a prop at build time
  return {
    props: {
      bags,
    },
  };
}
