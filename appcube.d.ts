/* eslint-disable @typescript-eslint/no-explicit-any */
// ====================================

// Custom Services

// ====================================

type GetStoreListResult = {
  storeInfoList: StoreInfo[]
  total: number
}

type StoreInfo = {
  definitionId: string
  description: string
  extInfo: {
    IPGAppKey: {
      attributeCode: 'IPGAppKey'
      /** 'c42531b418dc4b5485239918b3611f49' */
      attributeValue: string
      /** 'cAOm000000sGV92IbnRw' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    IPGAppNonce: {
      attributeCode: 'IPGAppNonce'
      /** '9d61c61e9432' */
      attributeValue: string
      /** 'cAOm000000sGV92IbnRx' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    LatLng: {
      attributeCode: 'LatLng'
      /** '{"lng":114.26407146076012,"lat":22.37462385017747}' */
      attributeValue: string
      /** 'cAOm000000oM9WoYjepE' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    address: {
      attributeCode: 'address'
      /** '漁農自然教育中心,西貢區,香港,香港特别行政区' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKi' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    autoPrint: {
      attributeCode: 'autoPrint'
      /** 'false' */
      attributeValue: string
      /** 'cAOm000000ryWdUNjy08' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    banner: {
      attributeCode: 'banner'
      /** 'https://obs-ap1qa-kbzcomerce.obs.cn-north-1.myhuaweicloud.com/10gg000000k4yfrq5TaS%2FImage%2F07064994-1abc-41ea-b32b-c9bf55dd563c.PNG' */
      attributeValue: string
      /** 'cAOm000000kTvcxnlzBg' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    businessStatus: {
      attributeCode: 'businessStatus'
      /** 'On' */
      attributeValue: string
      /** 'cAOm000000kvx3q02diC' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    businessTime: {
      attributeCode: 'businessTime'
      /** '09:22:00' */
      attributeValue: string
      /** 'cAOm000000k6VRUnRGCX' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    chefPrint: {
      attributeCode: 'chefPrint'
      /** 'true' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKf' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    chefPrinterSN: {
      attributeCode: 'chefPrinterSN'
      /** 'N314203G40284' */
      attributeValue: string
      /** 'cAOm000000kcHVwPUV7o' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    classification: {
      attributeCode: 'classification'
      /** 'cVw8000000onLiL5LOPA' */
      attributeValue: string
      /** 'cAOm000000pKB0PZ54ts' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    clientID: {
      attributeCode: 'clientID'
      /** 'vgR/gptg9Fp0M/riLIltAg==' */
      attributeValue: string
      /** 'cAOm000000kcHVwPUV7p' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    clientSecret: {
      attributeCode: 'clientSecret'
      /** 'vgR/gptg9Fp0M/riLIltAg==' */
      attributeValue: string
      /** 'cAOm000000kcHVwPUV7q' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    defaultTender: {
      attributeCode: 'defaultTender'
      /** 'Mpesa' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKc' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    deliveryFee: {
      attributeCode: 'deliveryFee'
      /** '11' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKh' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    deliveryPaymentMode: {
      attributeCode: 'deliveryPaymentMode'
      /** 'Postpaid' */
      attributeValue: string
      /** 'cAOm000000uUoU1jAErI' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    deliveryRange: {
      attributeCode: 'deliveryRange'
      /** '1000' */
      attributeValue: string
      /** 'cAOm000000oM9WoYjepF' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    passKey: {
      attributeCode: 'passKey'
      /** 'vgR/gptg9Fp0M/riLIltAg==' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKe' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    paymentMode: {
      attributeCode: 'paymentMode'
      /** 'Postpaid' */
      attributeValue: string
      /** 'cAOm000000kz4rPUT7Nw' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    phone: {
      attributeCode: 'phone'
      /** '1234567890' */
      attributeValue: string
      /** 'cAOm000000k6VRUnRGCW' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    prinertProvider: {
      attributeCode: 'prinertProvider'
      /** 'Novacom' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKa' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    printerSN: {
      attributeCode: 'printerSN'
      /** 'N314203G40284' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKb' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    shortCode: {
      attributeCode: 'shortCode'
      /** '174379' */
      attributeValue: string
      /** 'cAOm000000kcHVwPUV7r' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    supportDelivery: {
      attributeCode: 'supportDelivery'
      /** 'true' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKg' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    supportPartialRefund: {
      attributeCode: 'supportPartialRefund'
      /** 'false' */
      attributeValue: string
      /** 'cAOm000000uUoU1jAErJ' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    theme: {
      attributeCode: 'theme'
      /** '#0053AA' */
      attributeValue: string
      /** 'cAOm000000kpbraSETnU' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    walletAccount: {
      attributeCode: 'walletAccount'
      /** 'vgR/gptg9Fp0M/riLIltAg==' */
      attributeValue: string
      /** 'cAOm000000k6VRUnirKd' */
      id: string
      /** 'ckLY000000k6VRU8qcbI' */
      storeId: string
    }
    [prop: string]: {
      attributeCode: string
      attributeValue: string
      id: string
      storeId: string
    }
  }
  /** 'ckLY000000k6VRU8qcbI' */
  id: string
  /** 'https://obs-ap1qa-kbzcomerce.obs.cn-north-1.myhuaweicloud.com/10gg000000k4yfrq5TaS%2FImage%2F5dd21b3b-d6e2-406c-848f-e0d5b7183062.jpg' */
  logo: string
  /** 'cQ2a000000jt0iU9GfGi' */
  merchantId: string
  /** 'ST-0000011012' */
  name: string
  /** 'Active' */
  status: string
  /** '小蓝饭店' */
  storeName: string
  /** '' */
  summary: string
}

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
