import Head from "next/head";
import Navbar from "../Navbar/Navbar";
const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};
export default Layout;
