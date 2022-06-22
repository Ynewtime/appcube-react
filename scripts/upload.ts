/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import FormData from 'form-data'
import dotenv from 'dotenv-flow'
import { bootstrap } from 'global-agent'
import buffer from './zip'
import { WIDGET_ZIP_NAME } from './constants'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
process.env.GLOBAL_AGENT_NO_PROXY = process.env.no_proxy
process.env.GLOBAL_AGENT_HTTP_PROXY = process.env.HTTP_PROXY
bootstrap()

dotenv.config()
const { VITE_DOMAIN, VITE_CLIENT_ID, VITE_CLIENT_SECRET, VITE_WIDGET_ID } = process.env
if (!VITE_DOMAIN) throw Error('No VITE_DOMAIN')
if (!VITE_CLIENT_ID) throw Error('No VITE_CLIENT_ID')
if (!VITE_CLIENT_SECRET) throw Error('No VITE_CLIENT_SECRET')
if (!VITE_WIDGET_ID) throw Error('No VITE_WIDGET_ID')

axios.defaults.baseURL = VITE_DOMAIN
axios.defaults.withCredentials = true

try {
  const {
    data: { access_token: TOKEN },
  } = await axios.post<TokenResult>(`/baas/auth/v1.0/oauth2/token`, null, {
    params: {
      grant_type: 'client_credentials',
      client_id: VITE_CLIENT_ID,
      client_secret: VITE_CLIENT_SECRET,
    },
  })
  if (!TOKEN) throw Error('Fetch TOKEN error')
  else console.log('TOKEN:', TOKEN)
  axios.defaults.headers.common['Access-Token'] = TOKEN

  const {
    data: {
      content: { libraryId, pluginName, pluginDescription, category, industry, scenarios },
    },
  } = await axios.get<WidgetInfo>(`/magno/gallery/asset/widget/${VITE_WIDGET_ID}`)
  if (!libraryId) throw Error(`No WidgetInfo fetched from id:${VITE_WIDGET_ID}`)
  const identifier = libraryId
  const name = pluginName
  const description = pluginDescription
  const categoryId = category.id
  const industryId = industry.id
  const scenariosId = scenarios.length ? scenarios[0].id : ''

  console.log('id', VITE_WIDGET_ID)
  console.log('identifier', identifier)
  console.log('name', name)
  console.log('description', description)
  console.log('categoryId', categoryId)
  console.log('industryId', industryId)
  console.log('scenariosId', scenariosId)

  const form = new FormData()
  form.append('id', VITE_WIDGET_ID)
  form.append('identifier', identifier)
  form.append('name', name)
  form.append('description', description)
  form.append('file', buffer, { filename: WIDGET_ZIP_NAME })
  form.append('category', categoryId)
  form.append('industry', industryId)
  form.append('scenario', scenariosId)
  const { data: uploadResult } = await axios.post<UploadResult>(`/magno/gallery/asset/widget`, form, {
    headers: form.getHeaders(),
  })
  console.log(uploadResult)
} catch (error: any) {
  console.error(error.response)
  throw Error(error)
}
