/* eslint-disable @typescript-eslint/no-explicit-any */
import { success } from '@/modules/utils'
import FormData from 'form-data'
import APPCUBE_API from '../src/appcubeApi'
import { WIDGET_ZIP_NAME } from './constants'
import axios from './services'
import buffer from './zip'

const { APPCUBE_WIDGET_ID, APPCUBE_DOMAIN } = process.env // process.env had been configured by ./services file
if (!APPCUBE_WIDGET_ID) throw Error('No APPCUBE_WIDGET_ID')

try {
  // If you need to create a new widget, you can leave the APPCUBE_WIDGET_ID env variable and below varaibles empty
  const id = APPCUBE_WIDGET_ID
  // For creating a new widget, you need to configure these property first:
  let identifier = '' // Make sure the `identifier` is unique. e.g. t0000000000vF8747q4zR_WidgetName, the rule is `t + tenantId + _ + widgetName`
  let name = '' // e.g. {"en_US":"Widget","zh_CN":"通用组件测试"}
  let description = '' // e.g. {"en_US":"Widget","zh_CN":"通用组件测试"}
  let categoryId = '' // e.g. 16f519d485e-328fa286-893e-43ea-830c-460a2ef178e5
  let industryId = '' // e.g. 16c519d44af-361631af-9929-4822-a271-5dc702c81749
  let scenariosId = '' // e.g. 00000000000000000001

  if (id) {
    const {
      data: {
        content: { libraryId, pluginName, pluginDescription, category, industry, scenarios },
      },
    } = await axios.get<WidgetInfo>(`${APPCUBE_API.WIDGET}/${APPCUBE_WIDGET_ID}`)
    if (!libraryId) throw Error(`No WidgetInfo fetched from id:${APPCUBE_WIDGET_ID}`)
    identifier = libraryId
    name = pluginName
    description = pluginDescription
    categoryId = category?.id
    industryId = industry?.id
    scenariosId = scenarios?.length ? scenarios[0].id : ''
  }

  console.table({
    id,
    identifier,
    name,
    description,
    categoryId,
    industryId,
    scenariosId,
  })

  const form = new FormData()
  form.append('id', id)
  form.append('identifier', identifier)
  form.append('name', name)
  form.append('description', description)
  form.append('file', buffer, { filename: WIDGET_ZIP_NAME })
  form.append('category', categoryId)
  form.append('industry', industryId)
  form.append('scenario', scenariosId)
  const {
    data: { responseMessage },
  } = await axios.post<UploadResult>(APPCUBE_API.WIDGET, form)
  if (responseMessage === 'Success')
    success(`${APPCUBE_DOMAIN}/studio/index.html#/admin/widget/detail/${APPCUBE_WIDGET_ID}`)
} catch (error: any) {
  error(error.response)
  throw Error(error)
}
