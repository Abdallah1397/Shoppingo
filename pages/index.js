import styles from "../styles/Home.module.css";
import Title from "../components/Title";
export default function Home() {
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
      </div>
    </div>
  );
}
