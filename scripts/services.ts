/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *  Build Time Services
 */
import APPCUBE_API from '@/appcubeApi'
import { error, success } from '@/modules/utils'
import axios from 'axios'
import dayjs from 'dayjs'
import fs from 'fs'
import path from 'path'
import './envSetup'

const { VITE_DOMAIN, VITE_CLIENT_ID, VITE_CLIENT_SECRET, VITE_SCRIPT_NAME } = process.env
if (!VITE_DOMAIN) throw Error('No VITE_DOMAIN')
if (!VITE_CLIENT_ID) throw Error('No VITE_CLIENT_ID')
if (!VITE_CLIENT_SECRET) throw Error('No VITE_CLIENT_SECRET')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
axios.defaults.baseURL = VITE_DOMAIN
axios.defaults.withCredentials = true

export const getAccessToken = async () => {
  const cachePath = path.resolve(__dirname, './temp/cache.json')
  if (fs.existsSync(cachePath)) {
    try {
      const cache = JSON.parse(fs.readFileSync(cachePath).toString())
      if (dayjs(cache.time).isAfter(dayjs().subtract(1, 'hour')) && cache.accessToken) return cache.accessToken
    } catch (e: any) {
      error(e.message)
      throw Error(e)
    }
  }
  const {
    data: { access_token: accessToken },
  } = await axios.post<TokenResult>(APPCUBE_API.ACCESS_TOKEN, null, {
    params: {
      grant_type: 'client_credentials',
      client_id: VITE_CLIENT_ID,
      client_secret: VITE_CLIENT_SECRET,
    },
  })
  fs.writeFileSync(cachePath, JSON.stringify({ time: new Date().toLocaleString(), accessToken }))
  return accessToken
}

const accessToken = await getAccessToken()
if (!accessToken) throw Error('Fetch accessToken error')
else success(`Access-Token: ${accessToken}`)
axios.defaults.headers.common['Access-Token'] = accessToken

export default axios

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
