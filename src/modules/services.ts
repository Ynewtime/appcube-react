import axios from 'axios'
import { INTERVAL } from './constants'
import { APPCUBE_SERVICE } from './enums'

axios.defaults.withCredentials = true

export const getAccessToken = async () => {
  const {
    data: { access_token },
  } = await axios.post<TokenResult>(APPCUBE_SERVICE.ACCESS_TOKEN, null, {
    params: {
      grant_type: 'client_credentials',
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
    },
  })
  return access_token
}

export const getCsrfToken = async () => {
  const {
    data: { result },
  } = await axios.post<CommonResponse<string>>(APPCUBE_SERVICE.CSRF_TOKEN)
  return result
}

// ====================================

// Handle Token

if (import.meta.env.DEV) {
  const handleAccessToken = async () => {
    axios.defaults.headers.common['Access-Token'] = await getAccessToken()
  }
  handleAccessToken()
  setInterval(handleAccessToken, INTERVAL)
} else {
  const handleCsrfToken = async () => {
    axios.defaults.headers.common['csrf-token'] = await getCsrfToken()
    // Above code is equal to:
    // if (typeof HttpUtils !== 'undefined') {
    //   HttpUtils.getCsrfToken((csrfToken) => {
    //     axios.defaults.headers.common['csrf-token'] = csrfToken
    //   })
    // }
  }
  handleCsrfToken()
  setInterval(handleCsrfToken, INTERVAL)
}

// ====================================
