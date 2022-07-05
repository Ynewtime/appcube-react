import fs from 'fs'
import path from 'path'
import { error, success } from '../src/modules/utils'
import { activateScript, deactivateScript, getScriptByName, updateScript } from './services'

const { VITE_SCRIPT_NAME } = process.env
if (!VITE_SCRIPT_NAME) throw Error('No VITE_SCRIPT_NAME')
else success(`Script Name: ${VITE_SCRIPT_NAME}`)

const getContent = (filePath: string) => fs.readFileSync(path.resolve(__dirname, filePath)).toString()
const content = getContent(`./appcube-scripts/${VITE_SCRIPT_NAME}.ts`)
const jscode = getContent(`./appcube-scripts/build/${VITE_SCRIPT_NAME}.js`)
const sourceMap = getContent(`./appcube-scripts/build/${VITE_SCRIPT_NAME}.js.map`)
if (!content || !jscode || !sourceMap) throw Error('Service script param missed')

const scriptInfo = await getScriptByName()
const { id } = scriptInfo
if (!id) throw Error(`No Script Id`)
else success(`Script Id: ${id}`)

const deactivateScriptData = await deactivateScript(id)
if (deactivateScriptData.result) success('Script Deactivated')
else error('Script Deactivated Fail')

const data = await updateScript(id, {
  content,
  jscode,
  sourceMap,
})
if (data.result) success('Script Uploaded')
else error('Script Uploaded Fail')

const activateScriptData = await activateScript(id)
if (activateScriptData.result) success('Script Activated')
else error('Script Activated Fail')
