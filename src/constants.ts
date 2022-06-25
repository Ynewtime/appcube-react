import { getCookie } from './modules/utils'

export const INTERVAL = 1 * 60 * 1000

// Since the locale in cookie is changed by reload, we can make it constant
export const COOKIE_LOCALE = getCookie('locale') ? (getCookie('locale')?.includes('zh') ? 'zh-CN' : 'en') : 'zh-CN'
