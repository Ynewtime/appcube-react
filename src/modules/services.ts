/**
 *  Run Time Services
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import APPCUBE_API from '@/appcubeApi'
import { GET_ACCESS_TOKEN_INTERVAL, GET_CSRF_TOKEN_INTERVAL } from '@/constants'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.withCredentials = true

// ====================================

// Common API

// ====================================

export const getAccessToken = async () => {
  const {
    data: { access_token },
  } = await axios.post<TokenResult>(APPCUBE_API.ACCESS_TOKEN, null, {
    params: {
      grant_type: 'client_credentials',
      client_id: import.meta.env.APPCUBE_CLIENT_ID,
      client_secret: import.meta.env.APPCUBE_CLIENT_SECRET,
    },
  })
  return access_token
}

export const getCsrfToken = async (accessToken?: string) => {
  if (accessToken) axios.defaults.headers.common['Access-Token'] = accessToken
  const {
    data: { result },
  } = await axios.post<Res<string>>(APPCUBE_API.CSRF_TOKEN)
  return result
}

// Handle Token
if (import.meta.env.DEV) {
  const handleAccessToken = async () => {
    const accessToken = await getAccessToken()
    if (accessToken) axios.defaults.headers.common['Access-Token'] = accessToken
    else throw Error('No Access-Token')
  }
  await handleAccessToken()
  setInterval(handleAccessToken, GET_ACCESS_TOKEN_INTERVAL)
} else {
  // Make sure first request can be successful
  axios.interceptors.request.use(async function (config) {
    if (!config.headers) config.headers = {}
    if (config.url?.includes('/service/') && !Object.keys(config.headers).includes('csrf-token') && !Object.keys(config.headers.common || {}).includes('csrf-token')) {
      const res = await fetch(APPCUBE_API.CSRF_TOKEN, { method: 'POST' })
      const { result } = await res.json()
      if (result) {
        config.headers['csrf-token'] = result
        axios.defaults.headers.common['csrf-token'] = result
      }
    }
    return config
  })
  const handleCsrfToken = () => {
    if (typeof HttpUtils !== 'undefined') {
      HttpUtils.getCsrfToken((csrfToken) => {
        axios.defaults.headers.common['csrf-token'] = csrfToken
      })
    }
  }
  handleCsrfToken()
  setInterval(handleCsrfToken, GET_CSRF_TOKEN_INTERVAL)
}

export default axios

// ====================================

// Custom API

// ====================================

export const get = async <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) => {
  try {
    const res = await axios.get<T, AxiosResponse<T, D>>(url, config)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const post = async <T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => {
  try {
    const res = await axios.post<T, AxiosResponse<T, D>, D>(url, data, config)
    return res.data
  } catch (error) {
    console.error(error)
  }
}
