import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

import * as AppCtx from 'context'

import { ToolBar, SideDrawer, BackDrop } from 'components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppCtx.Provider>
      <AppCtx.ThemeConsumer>
        <Head>
          <title> WJunior Web Dev </title>
          <link rel='shortcut icon' href='/favicon.png' />
          <link rel='apple-touch-icon' href='/favicon.png' />
          <link rel='manifest' href='/manifest.json' />
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
      </AppCtx.ThemeConsumer>
    </AppCtx.Provider>
  )
}

export default MyApp
