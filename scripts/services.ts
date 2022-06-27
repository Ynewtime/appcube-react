/**
 *  Build Time Services
 */
import axios from 'axios'
import APPCUBE_API from '../src/appcubeApi'
import './envSetup'

const { VITE_DOMAIN, VITE_CLIENT_ID, VITE_CLIENT_SECRET, VITE_SCRIPT_NAME } = process.env
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

export const getScriptByName = async () => {
  if (!VITE_SCRIPT_NAME) throw Error(`No VITE_SCRIPT_NAME`)
  const {
    data: { result },
  } = await axios.post<Res<ScriptInfo[]>>(APPCUBE_API.SCRIPT_DATA, {
    condition: { conjunction: 'AND', conditions: [{ field: 'name', operator: 'eq', value: VITE_SCRIPT_NAME }] },
    options: {
      orderby: [
        { field: 'active', order: 'desc' },
        { field: 'createdDate', order: 'desc' },
      ],
      limit: 1,
    },
  })
  if (!result?.length) throw Error(`No script fetched from scriptName: ${VITE_SCRIPT_NAME}`)
  return result[0]
}

export const deactivateScript = async (scriptId: string) => {
  const { data } = await axios.put<Res<number>>(APPCUBE_API.SCRIPT_METADATA + scriptId, { active: false })
  return data
}

export const activateScript = async (scriptId: string) => {
  const { data } = await axios.put<Res<number>>(APPCUBE_API.SCRIPT_METADATA + scriptId, { active: true })
  return data
}

export const updateScript = async (scriptId: string, body: { content: string; jscode: string; sourceMap: string }) => {
  const { data } = await axios.put<Res<number>>(APPCUBE_API.SCRIPT_METADATA + scriptId, body)
  return data
}
