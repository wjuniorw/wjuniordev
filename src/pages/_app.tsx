import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "styled-components"

import GlobalStyles from 'styles/global'
import { darkTheme, lightTheme } from 'styles/ThemeConfig'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title> WJunior Web Dev </title>
        <link rel='shortcut icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='description' content='Web and Mobile Development, Smart solutions' />
        <meta name='theme-color' content='#06092B' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
