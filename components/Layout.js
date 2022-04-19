import Head from "next/head";
import Navbar from "./Navbar";
const Layout = (props) => {
    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Head>
            <Navbar />
            {props.children}
        </div>
    );
};
export default Layout;
