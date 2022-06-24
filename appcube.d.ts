/* eslint-disable @typescript-eslint/no-explicit-any */

// ====================================

// Common Services

// ====================================

/** Common Response Body Type */
type CommonResponse<T> = {
  resCode: '0' | string
  /** where success or error message sits */
  resMsg: '成功' | string
  result?: T
}

/**
 *  Response of fetching token:
 * POST /baas/auth/v1.0/oauth2/token?grant_type=client_credentials&client_id={{CLIENT_ID}}&client_secret={{CLIENT_SECRET}}
 */
type TokenResult = { access_token: string; expires_in: number; token_type: 'Bearer' }

type WidgetId = string
/**
 *  Response of fetching widget:
 * GET /magno/gallery/asset/widget/{{WIDGET_ID}}
 */
type WidgetInfo = {
  responseCode: number
  responseMessage: string
  content: {
    pluginId: WidgetId
    pluginName: string
    status: true
    pluginType: number
    libraryId: string
    pluginAuthor: string
    pluginVersion: string
    pluginDetails: string
    pluginDescription: string
    pluginUpdatedDate: number
    pluginValue: string
    domainType: string
    classification: string
    category: {
      id: string
      name: string
      displayName: string
      children: []
    }
    industry: {
      id: string
      name: string
      displayName: string
      children: []
      categories: []
    }
    scenarios: {
      id: string
      name: string
      displayName: string
    }[]
    managed: boolean
    deprecated: boolean
    event: string
  }
}

/**
 *  Response of creating or updating widget:
 * POST /magno/gallery/asset/widget
 */
type UploadResult = {
  responseCode: number
  responseMessage: string
  content: WidgetId
}

// ====================================

// Built-in API

// ====================================

/** Utils */
declare const HttpUtils: {
  URL: TURL
  getCookie: (name?: string) => string | undefined
  getCsrfToken: (callback: (token: string) => void) => void
  getExistLocale: () => string
  getI18n: (e: { locale: string; messages: LocaleMessages }) => any // Vue i18n instance
  getLocalStorage: (key: string) => string | null
  getLocale: () => string
  getLocaleWithUnderline: () => string
  getUrlParam: (param: string) => string | null
  refreshToken: () => undefined
  setCookie: (key: string, value: string) => void
  setLocalStorage: (key: string, value: string) => void
}

type TURL = (e?: string) => {
  urlString: string
  append: () => TURL
  appendPath: () => TURL
  appendParam: () => TURL
  toString: () => TURL
}

// Vue i18n Messages https://kazupon.github.io/vue-i18n/guide/messages.html#structure
type LocaleMessages = { [key: Locale]: LocaleMessageObject }
type LocaleMessageObject = { [key: Path]: LocaleMessage }
type LocaleMessageArray = LocaleMessage[]
type MessageContext = {
  list: (index: number) => mixed
  named: (key: string) => mixed
  linked: (key: string) => TranslateResult
  values: any // NOTE: not compatible for vue-i18n@v9.x
  path: string // NOTE: not compatible for vue-i18n@v9.x
  formatter: Formatter // NOTE: not compatible for vue-i18n@v9.x
  messages: LocaleMessages // NOTE: not compatible for vue-i18n@v9.x
  locale: Locale // NOTE: not compatible for vue-i18n@v9.x
}
type MessageFunction = (ctx: MessageContext) => string
type LocaleMessage = string | MessageFunction | LocaleMessageObject | LocaleMessageArray
type Locale = string
type Path = string
