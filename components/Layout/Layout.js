import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from '../Hero/Hero';
import ClientsSlider from "../ClientsSlider/ClientsSlider";

// Layout component handle page structure
const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Hero />
            <ClientsSlider />
            <Footer />
        </div>
    );
};
export default Layout;
