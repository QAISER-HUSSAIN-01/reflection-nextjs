import '../styles/globals.css';
import Layout from '../src/shared/layout/Layout';
import { ThemeProvider } from '@mui/material';
import { theme } from '../src/shared/theme';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
