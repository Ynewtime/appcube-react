/**
 *  Build Time Services
 */
import axios from 'axios'
import APPCUBE_API from '../src/appcubeApi'
import './envSetup'

const { VITE_DOMAIN, VITE_CLIENT_ID, VITE_CLIENT_SECRET } = process.env
if (!VITE_DOMAIN) throw Error('No VITE_DOMAIN')
if (!VITE_CLIENT_ID) throw Error('No VITE_CLIENT_ID')
if (!VITE_CLIENT_SECRET) throw Error('No VITE_CLIENT_SECRET')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
axios.defaults.baseURL = VITE_DOMAIN
axios.defaults.withCredentials = true

export default axios

export const getAccessToken = async () => {
  const {
    data: { access_token },
  } = await axios.post<TokenResult>(APPCUBE_API.ACCESS_TOKEN, null, {
    params: {
      grant_type: 'client_credentials',
      client_id: VITE_CLIENT_ID,
      client_secret: VITE_CLIENT_SECRET,
    },
  })
  return access_token
}
