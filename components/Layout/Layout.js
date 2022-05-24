import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

// Layout component handle page structure
const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
};
export default Layout;
