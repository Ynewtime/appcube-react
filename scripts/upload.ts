/* eslint-disable @typescript-eslint/no-explicit-any */
import FormData from 'form-data'
import buffer from './zip'
import { WIDGET_ZIP_NAME } from './constants'
import axios, { getAccessToken } from './envSetup'

const { VITE_DOMAIN, VITE_WIDGET_ID } = process.env
if (!VITE_WIDGET_ID) throw Error('No VITE_WIDGET_ID')

try {
  const accessToken = await getAccessToken()
  if (!accessToken) throw Error('Fetch accessToken error')
  else console.log('TOKEN:', accessToken)
  axios.defaults.headers.common['Access-Token'] = accessToken

  const {
    data: {
      content: { libraryId, pluginName, pluginDescription, category, industry, scenarios },
    },
  } = await axios.get<WidgetInfo>(`/magno/gallery/asset/widget/${VITE_WIDGET_ID}`)
  if (!libraryId) throw Error(`No WidgetInfo fetched from id:${VITE_WIDGET_ID}`)
  const identifier = libraryId
  const name = pluginName
  const description = pluginDescription
  const categoryId = category?.id
  const industryId = industry?.id
  const scenariosId = scenarios?.length ? scenarios[0].id : ''

  console.table({
    id: VITE_WIDGET_ID,
    identifier,
    name,
    description,
    categoryId,
    industryId,
    scenariosId,
  })

  const form = new FormData()
  form.append('id', VITE_WIDGET_ID)
  form.append('identifier', identifier)
  form.append('name', name)
  form.append('description', description)
  form.append('file', buffer, { filename: WIDGET_ZIP_NAME })
  form.append('category', categoryId)
  form.append('industry', industryId)
  form.append('scenario', scenariosId)
  const {
    data: { responseMessage },
  } = await axios.post<UploadResult>(`/magno/gallery/asset/widget`, form)
  if (responseMessage === 'Success') {
    console.log(`Check online: ${VITE_DOMAIN}/studio/index.html#/admin/widget/edit/1/${VITE_WIDGET_ID}`)
  }
} catch (error: any) {
  console.error(error.response)
  throw Error(error)
}
