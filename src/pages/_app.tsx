import '../styles/globals.css'
import { Layout } from 'antd'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Layout style={{ minHeight: "100vh" }}>
      <Component {...pageProps} />
    </Layout>

  </>
}

export default MyApp
