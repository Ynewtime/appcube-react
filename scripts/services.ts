/**
 *  Build Time Services
 */
import axios from 'axios'
import dotenv from 'dotenv-flow'
import { bootstrap } from 'global-agent'
import APPCUBE_API from '../src/appcubeApi'

dotenv.config()

const { VITE_DOMAIN, VITE_CLIENT_ID, VITE_CLIENT_SECRET, VITE_NO_PROXY, VITE_HTTP_PROXY } = process.env
if (!VITE_DOMAIN) throw Error('No VITE_DOMAIN')
if (!VITE_CLIENT_ID) throw Error('No VITE_CLIENT_ID')
if (!VITE_CLIENT_SECRET) throw Error('No VITE_CLIENT_SECRET')

if (VITE_HTTP_PROXY) {
  // Set proxy for intranet
  process.env.GLOBAL_AGENT_NO_PROXY = VITE_NO_PROXY
  process.env.GLOBAL_AGENT_HTTP_PROXY = VITE_HTTP_PROXY
  bootstrap()
}

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
