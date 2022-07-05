/* eslint-disable @typescript-eslint/no-explicit-any */

// ====================================

// Common Services

// ====================================

/** Common Response Body Type */
type Res<T> = {
  resCode: '0' | string | null
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
