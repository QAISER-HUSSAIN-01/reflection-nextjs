import '../styles/globals.css'
import Layout from '../src/shared/layout/Layout'
import { useState } from 'react'
export default function App({ Component, pageProps }) {
  // const [windowSize, setWindowSize] = useState();
  return <Layout> <Component {...pageProps} /> </Layout>
}
