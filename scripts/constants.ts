import fs from 'fs'

export const WIDGET_PATH = `./build`
export const WIDGET_ZIP_NAME = `Widget.zip`
export const WIDGET_ZIP_PATH = `scripts/temp/${WIDGET_ZIP_NAME}`

if (!fs.existsSync(WIDGET_PATH)) throw Error(`No ${WIDGET_PATH}`)
if (!fs.existsSync('scripts/temp')) fs.mkdirSync('scripts/temp', { recursive: true })
