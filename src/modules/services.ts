/**
 *  Run Time Services
 */
import axios from 'axios'
import { INTERVAL } from '@/constants'
import APPCUBE_API from '@/appcubeApi'

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
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
    },
  })
  return access_token
}

export const getCsrfToken = async (accessToken?: string) => {
  if (accessToken) axios.defaults.headers.common['Access-Token'] = accessToken
  const {
    data: { result },
  } = await axios.post<CommonResponse<string>>(APPCUBE_API.CSRF_TOKEN)
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
  setInterval(handleAccessToken, INTERVAL)
} else {
  if (ACCESS_TOKEN) axios.defaults.headers.common['Access-Token'] = ACCESS_TOKEN
  const handleCsrfToken = async () => {
    if (typeof HttpUtils !== 'undefined') {
      HttpUtils.getCsrfToken((csrfToken) => {
        delete axios.defaults.headers.common['Access-Token']
        axios.defaults.headers.common['csrf-token'] = csrfToken
      })
    }
    // Above code is equal to:
    // const csrfToken = await getCsrfToken()
    // if (csrfToken) axios.defaults.headers.common['Csrf-Token'] = csrfToken
    // else throw Error('No csrf-token')
  }
  handleCsrfToken()
  setInterval(handleCsrfToken, INTERVAL)
}

export default axios

// ====================================

// Custom API

// ====================================
