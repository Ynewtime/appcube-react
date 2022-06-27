import fs from 'fs'
import path from 'path'
import axios, { activateScript, deactivateScript, getAccessToken, getScriptByName, updateScript } from './services'
import { success, error } from '../src/modules/utils'

const { VITE_SCRIPT_NAME } = process.env
if (!VITE_SCRIPT_NAME) throw Error('No VITE_SCRIPT_NAME')

const accessToken = await getAccessToken()
if (!accessToken) throw Error('Fetch accessToken error')
else success(`Access-Token: ${accessToken}`)
axios.defaults.headers.common['Access-Token'] = accessToken

const getContent = (filePath: string) => fs.readFileSync(path.resolve(__dirname, filePath)).toString()
const content = getContent(`./appcube-scripts/${VITE_SCRIPT_NAME}.ts`)
const jscode = getContent(`./appcube-scripts/${VITE_SCRIPT_NAME}.js`)
const sourceMap = getContent(`./appcube-scripts/${VITE_SCRIPT_NAME}.js.map`)
if (!content || !jscode || !sourceMap) throw Error('Service script param missed')

const scriptInfo = await getScriptByName()
const { id } = scriptInfo
if (!id) throw Error(`No Script Id`)
else success(`Script Id: ${id}`)

const deactivateScriptData = await deactivateScript(id)
if (deactivateScriptData.result) success('Deactivate Script Success')
else error('Deactivate Script Fail')

const data = await updateScript(id, {
  content,
  jscode,
  sourceMap,
})
if (data.result) success('Upload Script Success')
else error('Upload Script Fail')

const activateScriptData = await activateScript(id)
if (activateScriptData.result) success('Activate Script Success')
else error('Activate Script Fail')
