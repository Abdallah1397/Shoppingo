import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import Category from '../components/Categories/Category';
import About from "../components/About/About";
import Shirt from '../public/assets/categories/shirt.jpg';
import HeadPhone from '../public/assets/categories/headPhones.jpg';
import ToteBags from '../public/assets/bags/colorful.png'
// Home Page
export default function Home() {
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
      <About />
    </div>
  );
}


