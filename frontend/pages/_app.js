import Layout from '../components/Layout'
import Head from 'next/head'
import '../src/global.css'
import './globals.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import 'react-calendar/dist/Calendar.css';

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
