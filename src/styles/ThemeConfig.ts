import { createGlobalStyle } from 'styled-components'
import { LightTheme } from './light'
import { DarkTheme } from './dark'

export const ThemeStyles = createGlobalStyle<Theme>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
type Theme = LightTheme & DarkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export { default as lightTheme } from './light'
export { default as darkTheme } from './dark'