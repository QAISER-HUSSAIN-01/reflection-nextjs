import '../styles/globals.css'
import Layout from '../src/shared/layout/Layout'
export default function App({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /> </Layout>
}
