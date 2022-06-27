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
  /** For Select Option Type */
  value: string
  label: string
}

// ====================================

// Common Services

// ====================================

/** Common Response Body Type */
type Res<T> = {
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

type CurrentUser = {
  /** null */
  aboutMe?: string
  /** '' */
  address?: string
  /** '' */
  alias?: string
  /** null */
  city?: string
  /** null */
  communityNickname?: string
  /** '' */
  companyName?: string
  /** 'China' */
  country?: string
  /** '10gd000000jpgI63CgNs' */
  createdBy?: string
  /** 'User' */
  'createdBy.__objectType'?: string
  /** 'ScanOrder' */
  'createdBy.name'?: string
  /** '2022-05-20 13:11:51' */
  createdDate?: string
  /** '' */
  creationType?: string
  ctx?: {
    /** '10gd000000tfIvL01Jfk' */
    userId?: string
    /** 'zengyuhao' */
    username?: string
    /** 'zengyuhao' */
    name?: string
    /** '0000000000jpgI63CgNt' */
    tenantId?: string
    /** 'ScanOrder' */
    tenantName?: string
    /** 'zh_CN' */
    locale?: string
    timezone?: {
      /** '3' */
      value?: string
      /** 'Africa/Nairobi' */
      name?: string
      /** '(GMT+03:00) Eastern African Time (Africa/Nairobi)' */
      display?: string
    }
    loginType?: 5
    /** 'User' */
    userType?: string
  }
  /** '' */
  currencyLocaleKey?: string
  /** null */
  delegatedApprover?: string
  /** null */
  department?: string
  /** false */
  disableAnonymous?: boolean
  /** 'stephen.tseng@huawei.com' */
  email?: string
  /** null */
  extIdentityID?: string
  /** '' */
  extUserID?: string
  /** null */
  freeLockoutTime?: string
  /** '10gd000000tfIvL01Jfk' */
  id?: string
  /** null */
  invalidLoginAttempts?: string
  /** true */
  isActive?: boolean
  /** false */
  isAdmin?: boolean
  /** false */
  isExternal?: boolean
  /** 'zh_CN' */
  languageLocaleKey?: string
  /** '2022-06-25 20:19:50' */
  lastLoginAt?: string
  /** '10gd000000tfIvL01Jfk' */
  lastModifiedBy?: string
  /** 'User' */
  'lastModifiedBy.__objectType'?: string
  /** 'zengyuhao' */
  'lastModifiedBy.name'?: string
  /** '2022-06-25 15:27:50' */
  lastModifiedDate?: string
  /** null */
  lastStatusSetAt?: string
  /** 'Enterprise' */
  licenseLevel?: string
  /** null */
  manager?: string
  /** 'zengyuhao' */
  name?: string
  /** 'ScanOrder' */
  namespace?: string
  /** '' */
  occupation?: string
  /** '10gd000000jpgI63CgNs' */
  owner?: string
  /** 'User' */
  'owner.__objectType'?: string
  /** 'ScanOrder' */
  'owner.name'?: string
  /** '2022-06-07 10:17:27' */
  passwordLastModifiedDate?: string
  permissions?: {
    /** true */
    appAdmin?: boolean
    /** true */
    appDev?: boolean
    /** true */
    appInstall?: boolean
    /** true */
    appPackage?: boolean
    /** true */
    assetAdmin?: boolean
    /** true */
    assetBaseQuery?: boolean
    /** true */
    assetListQuery?: boolean
    /** true */
    assignPermissionSets?: boolean
    /** true */
    baAdmin?: boolean
    /** true */
    baDev?: boolean
    /** true */
    customizeApplication?: boolean
    /** true */
    dataVAdmin?: boolean
    /** true */
    dataVDev?: boolean
    /** true */
    exportReports?: boolean
    /** true */
    manageBaseline?: boolean
    /** true */
    manageDashboards?: boolean
    /** true */
    manageDevCloud?: boolean
    /** true */
    manageEventStreaming?: boolean
    /** true */
    manageFlows?: boolean
    /** true */
    manageGroups?: boolean
    /** true */
    manageNativeBO?: boolean
    /** true */
    manageNotify?: boolean
    /** true */
    managePackage?: boolean
    /** true */
    managePermissionSets?: boolean
    /** true */
    managePortalSafeSettings?: boolean
    /** true */
    managePortalUserPermissions?: boolean
    /** true */
    manageProcessInstances?: boolean
    /** true */
    manageProcesses?: boolean
    /** true */
    manageProfiles?: boolean
    /** true */
    manageQueues?: boolean
    /** true */
    manageReports?: boolean
    /** true */
    manageRoles?: boolean
    /** false */
    manageScene?: boolean
    /** true */
    manageScripts?: boolean
    /** true */
    manageServicePermissions?: boolean
    /** true */
    manageSharing?: boolean
    /** true */
    manageSystemConfig?: boolean
    /** true */
    manageTimedTasks?: boolean
    /** true */
    manageUsers?: boolean
    /** true */
    manageWebsite?: boolean
    /** true */
    modifyAllData?: boolean
    /** true */
    resetUserPasswordsAndUnlockUsers?: boolean
    /** true */
    runDashboards?: boolean
    /** true */
    runFlows?: boolean
    /** true */
    runProcesses?: boolean
    /** true */
    runReports?: boolean
    /** true */
    runSQL?: boolean
    /** true */
    runScripts?: boolean
    /** true */
    viewAllData?: boolean
    /** true */
    viewAllUsers?: boolean
    /** true */
    viewBusinessConfigCenter?: boolean
    /** true */
    viewDashboards?: boolean
    /** true */
    viewETLEngine?: boolean
    /** true */
    viewEncryptedData?: boolean
    /** true */
    viewFlows?: boolean
    /** true */
    viewGroups?: boolean
    /** true */
    viewNativeBO?: boolean
    /** true */
    viewPermissionSets?: boolean
    /** true */
    viewPortalUserPermissions?: boolean
    /** true */
    viewPrivateData?: boolean
    /** true */
    viewProcesses?: boolean
    /** true */
    viewProfiles?: boolean
    /** true */
    viewQueues?: boolean
    /** true */
    viewReports?: boolean
    /** true */
    viewRoles?: boolean
    /** true */
    viewScripts?: boolean
    /** true */
    viewServicePermissions?: boolean
    /** true */
    viewSetupAndConfiguration?: boolean
    /** true */
    viewTenantTraceLog?: boolean
    /** true */
    viewTimedTasks?: boolean
  }
  /** '' */
  phone?: string
  /** null */
  photo?: string
  /** null */
  postCode?: string
  /** '000T0000000000000001' */
  profile?: string
  /** 'Profile' */
  'profile.__objectType'?: string
  /** 'System Administrator Profile' */
  'profile.name'?: string
  /** ['000T0000000000000001'] */
  profileArray?: string[]
  /** null */
  province?: string
  /** true */
  requireNamespace?: boolean
  /** false */
  resetPassword?: boolean
  /** null */
  role?: string
  /** false */
  securityMode?: boolean
  /** null */
  status?: string
  /** '0000000000jpgI63CgNt' */
  tenantId?: string
  /** 'ScanOrder' */
  tenantName?: string
  /** '3' */
  timeZoneSidKey?: string
  timezone?: {
    /** '3' */
    value?: string
    /** 'Africa/Nairobi' */
    name?: string
    /** '(GMT+03:00) Eastern African Time (Africa/Nairobi)' */
    display?: string
  }
  /** 'zengyuhao' */
  userName?: string
  /** 'zengyuhao' */
  usrName?: string
  /** 'zengyuhao' */
  usrname?: string
}

type ScriptInfo = {
  /** true */
  active?: boolean
  /** '000f000000uUFDriw9S4' */
  belongTo?: string
  /** 'Application' */
  'belongTo.__objectType'?: string
  /** 'ScanOrder__Reports' */
  'belongTo.name'?: string
  /** null */
  catalogue?: string
  content?: string
  /** '10gd000000tfIvL01Jfk' */
  createdBy?: string
  /** 'User' */
  'createdBy.__objectType'?: string
  /** 'zengyuhao' */
  'createdBy.name'?: string
  /** '2022-06-25 21:52:55' */
  createdDate?: string
  /** true */
  custom?: boolean
  /** '' */
  description?: string
  /** '001a000000udehTW7KS0' */
  id?: string
  /** null */
  installedPackage?: string
  jscode?: string
  /** null */
  label?: string
  /** '10gd000000tfIvL01Jfk' */
  lastModifiedBy?: string
  /** 'User' */
  'lastModifiedBy.__objectType'?: string
  /** 'zengyuhao' */
  'lastModifiedBy.name'?: string
  /** '2022-06-26 10:52:15' */
  lastModifiedDate?: string
  /** 'Query.run' */
  methodName?: string
  /** 'ScanOrder__query' */
  name?: string
  /** '10gd000000tfIvL01Jfk' */
  owner?: string
  /** 'User' */
  'owner.__objectType'?: string
  /** 'zengyuhao' */
  'owner.name'?: string
  /** 0 */
  protectMode?: boolean
  sourceMap?: string
  /** '1.0.1' */
  version?: string
  /** 0 */
  visibility?: boolean
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
