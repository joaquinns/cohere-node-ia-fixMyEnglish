import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContext {
  handleToggleDark: () => void
  dark: boolean
}

interface ThemeContextProvider {
  children: JSX.Element
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeContextProvider = ({ children }: ThemeContextProvider) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [dark, setDark] = useState(false)

  const handleToggleDark = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const value = {
    handleToggleDark,
    dark
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
