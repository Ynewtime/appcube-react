import dotenv from 'dotenv-flow'
import { bootstrap } from 'global-agent'

dotenv.config()

const { VITE_HTTP_PROXY, VITE_NO_PROXY } = process.env

if (VITE_HTTP_PROXY) {
  // Set proxy for intranet
  process.env.GLOBAL_AGENT_NO_PROXY = VITE_NO_PROXY
  process.env.GLOBAL_AGENT_HTTP_PROXY = VITE_HTTP_PROXY
  bootstrap()
}
