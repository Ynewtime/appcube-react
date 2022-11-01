/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *  Build Time Services
 */
import APPCUBE_API from '@/appcubeApi'
import { error, success, formatUrl } from '@/modules/utils'
import axios from 'axios'
import dayjs from 'dayjs'
import fs from 'fs'
import path from 'path'
import './envSetup'

const { APPCUBE_DOMAIN, APPCUBE_CLIENT_ID, APPCUBE_CLIENT_SECRET, APPCUBE_SCRIPT_NAME } = process.env
if (!APPCUBE_DOMAIN) throw Error('No APPCUBE_DOMAIN')
if (!APPCUBE_CLIENT_ID) throw Error('No APPCUBE_CLIENT_ID')
if (!APPCUBE_CLIENT_SECRET) throw Error('No APPCUBE_CLIENT_SECRET')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
axios.defaults.baseURL = APPCUBE_DOMAIN
axios.defaults.withCredentials = true

export const getAccessToken = async () => {
  const tempPath = path.resolve(__dirname, './temp')
  if (!fs.existsSync(tempPath)) fs.mkdirSync(tempPath)
  const cachePath = path.resolve(tempPath, 'cache.json')
  if (fs.existsSync(cachePath)) {
    try {
      const cache = JSON.parse(fs.readFileSync(cachePath).toString())
      if (dayjs(cache.time).isAfter(dayjs().subtract(cache.expires_in / 60, 'minute')) && cache.accessToken) return cache.accessToken
    } catch (e: any) {
      error(e.message)
      throw Error(e)
    }
  }
  const {
    data: { access_token: accessToken, expires_in },
  } = await axios.post<TokenResult>(APPCUBE_API.ACCESS_TOKEN, null, {
    params: {
      grant_type: 'client_credentials',
      client_id: APPCUBE_CLIENT_ID,
      client_secret: APPCUBE_CLIENT_SECRET,
    },
  })
  fs.writeFileSync(cachePath, JSON.stringify({ time: new Date().toLocaleString(), accessToken, expires_in }))
  return accessToken
}

const accessToken = await getAccessToken()
if (!accessToken) throw Error('Fetch accessToken error')
else success(`Access-Token: ${accessToken}`)
axios.defaults.headers.common['Access-Token'] = accessToken

export default axios

export const getScriptByName = async () => {
  if (!APPCUBE_SCRIPT_NAME) throw Error(`No APPCUBE_SCRIPT_NAME`)
  const {
    data: { result },
  } = await axios.post<Res<ScriptInfo[]>>(APPCUBE_API.SCRIPT_DATA, {
    condition: { conjunction: 'AND', conditions: [{ field: 'name', operator: 'eq', value: APPCUBE_SCRIPT_NAME }] },
    options: {
      orderby: [
        { field: 'active', order: 'desc' },
        { field: 'createdDate', order: 'desc' },
      ],
      limit: 1,
    },
  })
  if (!result?.length) throw Error(`No script fetched from scriptName: ${APPCUBE_SCRIPT_NAME}`)
  return result[0]
}

export const deactivateScript = async (scriptId: string) => {
  const { data } = await axios.put<Res<number>>(formatUrl(APPCUBE_API.SCRIPT_METADATA) + scriptId, { active: false })
  return data
}

export const activateScript = async (scriptId: string) => {
  const { data } = await axios.put<Res<number>>(formatUrl(APPCUBE_API.SCRIPT_METADATA) + scriptId, { active: true })
  return data
}

export const updateScript = async (scriptId: string, body: { content: string; jscode: string; sourceMap: string }) => {
  const { data } = await axios.put<Res<number>>(formatUrl(APPCUBE_API.SCRIPT_METADATA) + scriptId, body)
  return data
}
