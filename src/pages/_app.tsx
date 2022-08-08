import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

import * as AppCtx from 'context'

import { ToolBar, SideDrawer, BackDrop, Footer } from 'components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppCtx.Provider>
      <AppCtx.ThemeConsumer>
        <Head>
          <title> WJunior Web Dev </title>
          <link rel='shortcut icon' href='/favicon.png' />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name='description'
            content='Web and Mobile Development, Smart solutions'
          />
          <meta name='theme-color' content='#06092B' />
        </Head>
        <GlobalStyles />
        <ToolBar />
        <SideDrawer />
        <BackDrop />
        <Component {...pageProps} />
        <Footer />
      </AppCtx.ThemeConsumer>
    </AppCtx.Provider>
  )
}

export default MyApp
