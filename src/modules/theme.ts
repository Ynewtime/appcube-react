import { FULL_MODE } from '@/constants'
import { ThemeUtils } from '@/modules/utils'
import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import React from 'react'

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

export const darkAtom = atom(FULL_MODE || import.meta.env.DEV ? ThemeUtils.getInitDark() : false)

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useAtom(themeAtom)
  const [prefersDark] = usePrefersDark()
  const [isDark, setDark] = useAtom(darkAtom)

  React.useEffect(() => {
    const newTheme = ThemeUtils.getTheme(isDark, prefersDark)
    const newIsDark = ThemeUtils.getIsDark(theme, prefersDark)
    if (FULL_MODE || import.meta.env.DEV) {
      setTheme(newTheme)
      setDark(newIsDark)
      ThemeUtils.handleThemeChange(newTheme, newIsDark)
    } else ThemeUtils.handleThemeChange('light', false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDark])
  React.useEffect(() => {
    const newTheme = ThemeUtils.getTheme(isDark, prefersDark)
    if (FULL_MODE || import.meta.env.DEV) {
      setTheme(newTheme)
      ThemeUtils.handleThemeChange(newTheme, isDark)
    } else ThemeUtils.handleThemeChange('light', false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark])

  return children
}
