export const INTERVAL = 1 * 60 * 1000

export const APPCUBE_SERVICE = {
  // Common
  ACCESS_TOKEN: '/baas/auth/v1.0/oauth2/token',
  CSRF_TOKEN: '/u-route/baas/sys/v1.0/csrf/get',

  // Custom: Under domain:https://qaopen.besclouds.com
  GET_STORE_LIST: '/service/ScanOrder__StoreManagement/1.0.0/store/list',
}
