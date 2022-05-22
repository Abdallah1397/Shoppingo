import '../styles/globals.css'
import Layout from "../components/Layout/Layout";

// Render all pages by layout component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
