import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { addOneProduct } from "../redux/actions/cart";
import { setPage } from "../redux/actions/paginate";
import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import About from "../components/About/About";
import Product from "../components/product/product";

export default function Home({ bags }) {
  const dispatch = useDispatch();
  // get current page state
  const currentPage = useSelector((state) => state.currentPage.currentPage);
  // products per page
  const productPerPage = 6;
  const offset = currentPage * productPerPage;
  // get selected data
  const currentPageData = bags.slice(offset, offset + productPerPage);
  // get page count
  const pageCount = Math.ceil(bags.length / productPerPage);
  // page change function
  const handlePageChange = ({ selected }) => {
    dispatch(setPage(selected));
    console.log(selected);
  };
  return (
    <div>
      {/* Main Banner */}
      <div className={styles.mainBanner} />
      <div className="container">
        {/* title */}
        <Title title="Products" id="shop" />
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
                rate={item.rate}
                onClick={() => dispatch(addOneProduct(item))}
              />
            );
          })}
        </div>
        <div className={styles.paginationDiv}>
          {/* Pagination */}
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={styles.pagination}
            previousLinkClassName={styles.perviousPage}
            nextLinkClassName={styles.nextPage}
            disabledClassName={styles.disabledPage}
            activeClassName={styles.activePage}
            initialPage={currentPage}
          />
        </div>
      </div>
      <About />
    </div>
  );
}

// get all data with getStaticProps
// this function gets called at buil server side
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
