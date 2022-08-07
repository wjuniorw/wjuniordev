import React, { createContext, useState, useContext, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styles/ThemeConfig'

import { LightTheme } from 'styles/light'
import { DarkTheme } from 'styles/dark'

const initialState = {
  theme: 'light',
  opened: true,
  currentTheme: lightTheme,
}

export const ApplicationCtx = createContext<ApplicationCtxType>(initialState)

type Current = 'light' | 'dark'
export type ApplicationCtxType = typeof initialState & {
  dark?: DarkTheme
  light?: LightTheme
  toggleDrawer?: () => void
  currentTheme: DarkTheme | LightTheme
  chooseTheme?: (current: Current) => void
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [opened, toggle] = useState(false)
  const [theme, setTheme] = useState('light')
  const themes = {
    dark: darkTheme,
    light: lightTheme,
  }

  const toggleDrawer = () => toggle(!opened)

  const chooseTheme = (current: Current) => {
    const themes = {
      light: 'dark',
      dark: 'light',
    }
    setTheme(themes[current])
  }

  return (
    <ApplicationCtx.Provider
      value={{
        theme,
        opened,
        chooseTheme,
        toggleDrawer,
        dark: darkTheme,
        light: lightTheme,
        currentTheme: themes[theme as Current],
      }}>
      {children}
    </ApplicationCtx.Provider>
  )
}

export const ThemeConsumer = ({ children }: { children: ReactNode }) => {
  const { currentTheme } = useContext(ApplicationCtx)
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}
