import { Provider } from "react-redux";
import store from '../redux/store';
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

// Render all pages by layout component
function MyApp({ Component, pageProps }) {
  return (
    // Provider used to link app with store
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
