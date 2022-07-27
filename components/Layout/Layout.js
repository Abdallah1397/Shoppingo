import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ClientsSlider from "../ClientsSlider/ClientsSlider";

// Layout component handle page structure
const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <ClientsSlider />
            <Footer />
        </div>
    );
};
export default Layout;
