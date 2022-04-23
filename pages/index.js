import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import Image from "next/image";
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
        {bags.map(item => {
          return (
            <div key={item.id}>
              <h1>
                {item.title}
              </h1>
              <Image alt={item.title} src={item.image} width="500px" height="400px" />
            </div>
          )
        })}
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
  }
}


