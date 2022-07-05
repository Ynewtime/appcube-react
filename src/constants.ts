import { getCookie } from './modules/utils'

/**
 *  Enable full capabilities including dark mode and i18n within the app
 * If your app was built from scratch here and can be a SPA, just enable it.
 * Disable it if you don't need them or you need to disable dark mode and in-app i18n.
 */
export const FULL_MODE = true

export const GET_ACCESS_TOKEN_INTERVAL = 60 * 60 * 1000

export const GET_CSRF_TOKEN_INTERVAL = 5 * 60 * 1000

// Since the locale in cookie is changed by reload, we can make it constant
export const COOKIE_LOCALE = getCookie('locale') ? (getCookie('locale')?.includes('zh') ? 'zh-CN' : 'en') : 'zh-CN'
