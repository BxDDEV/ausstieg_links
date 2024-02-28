//import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <SessionProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
    </>
  )
}
