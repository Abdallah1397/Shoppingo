import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store } from '../redux/store';
import { persistor } from '../redux/store';
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

// Render all pages by layout component
function MyApp({ Component, pageProps }) {
  return (
    // Provider used to link app with store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
