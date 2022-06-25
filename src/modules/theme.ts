import React from 'react'
import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { ThemeUtils } from '@/modules/utils'

const themeAtom = atomWithStorage('theme', 'auto')

const { matches: init, mediaQuery } = ThemeUtils.getPrefersDark()
const usePrefersDark = () => {
  const [prefersDark, setPrefersDark] = React.useState(init)
  React.useEffect(() => {
    const handleSetPrefersDark = ({ matches }: MediaQueryListEvent) => setPrefersDark(matches)
    mediaQuery.addEventListener('change', handleSetPrefersDark)
    return () => {
      mediaQuery.removeEventListener('change', handleSetPrefersDark)
    }
  }, [])
  return [prefersDark, setPrefersDark] as const
}

export const darkAtom = atom(ThemeUtils.getInitDark())

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useAtom(themeAtom)
  const [prefersDark] = usePrefersDark()
  const [isDark, setDark] = useAtom(darkAtom)

  React.useEffect(() => {
    const newTheme = ThemeUtils.getTheme(isDark, prefersDark)
    setTheme(newTheme)
    const newIsDark = ThemeUtils.getIsDark(theme, prefersDark)
    setDark(newIsDark)
    if (import.meta.env.DEV) ThemeUtils.handleThemeChange(newTheme, newIsDark)
    else ThemeUtils.handleThemeChange('light', false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDark])
  React.useEffect(() => {
    const newTheme = ThemeUtils.getTheme(isDark, prefersDark)
    setTheme(newTheme)
    if (import.meta.env.DEV) ThemeUtils.handleThemeChange(newTheme, isDark)
    else ThemeUtils.handleThemeChange('light', false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark])

  return children
}
