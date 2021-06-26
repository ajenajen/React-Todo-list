import { Fragment } from 'react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Fragment>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
    </Head>
    <Component {...pageProps} />
  </Fragment>
  )
}

export default MyApp
