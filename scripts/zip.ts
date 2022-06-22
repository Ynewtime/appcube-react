import zipdir from 'zip-dir'
import { WIDGET_PATH, WIDGET_ZIP_PATH } from './constants'

async function zip() {
  return zipdir(WIDGET_PATH, { saveTo: WIDGET_ZIP_PATH })
}

export default await zip()
