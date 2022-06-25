export class ThemeUtils {
  static getPrefersDark() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    return { matches: mediaQuery.matches, mediaQuery }
  }

  static toggleDarkClass(v: boolean) {
    document.documentElement.classList.toggle('dark', v)
  }

  static getInitDark() {
    const { matches } = this.getPrefersDark()
    const theme = localStorage.getItem('theme') || 'auto'
    return theme === 'auto' ? matches : theme === 'dark'
  }

  static getIsDark(theme: string, prefersDark: boolean) {
    if (theme === 'dark' || (theme === 'auto' && prefersDark)) return true
    else return false
  }

  static getTheme(isDark: boolean, prefersDark: boolean) {
    if ((isDark && prefersDark) || (!isDark && !prefersDark)) return 'auto'
    return isDark ? 'dark' : 'light'
  }

  static handleThemeChange(theme: string, isDark: boolean) {
    document.documentElement.setAttribute('data-theme', theme)
    this.toggleDarkClass(isDark)
  }
}

export const log = (...args: unknown[]) => console.log.apply(null, [`[${new Date().toLocaleString()}]`, ...args])

export const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

export const createLink = (rel: string, href: string, type?: string) => {
  const link = document.createElement('link')
  link.setAttribute('rel', rel)
  link.setAttribute('href', href)
  if (type) link.setAttribute('type', type)
  document.head.appendChild(link)
}

export const getCookie = (key: string) => {
  const name = `${key}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')
  for (let i = 0; i < cookieArray.length; i += 1) {
    let item = cookieArray[i]
    while (item.charAt(0) === ' ') {
      item = item.substring(1)
    }
    if (item.indexOf(name) === 0) {
      return item.substring(name.length, item.length)
    }
  }
  return null
}
