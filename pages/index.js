import { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import Product from "../components/product/product";

export default function Home({ bags }) {
  // pagination state
  const [currentPage, setCurrentPage] = useState(0);
  // products per page
  const productPerPage = 3;
  const offset = currentPage * productPerPage;
  // get selected data
  const currentPageData = bags.slice(offset, offset + productPerPage);
  // get page count
  const pageCount = Math.ceil(bags.length / productPerPage);
  // page change function
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
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
          {currentPageData.map((item, index) => {
            return (
              <Product
                key={index}
                title={item.title}
                src={item.image}
                id={item.id}
                price={item.price}
              />
            );
          })}
        </div>
        <div>
          {/* Pagination */}
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={styles.pagination}
            previousLinkClassName={"perviousPage"}
            nextLinkClassName={"nextPage"}
            disabledClassName={styles.disabledPage}
            activeClassName={styles.activePage}
          />
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
