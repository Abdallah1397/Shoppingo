import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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
