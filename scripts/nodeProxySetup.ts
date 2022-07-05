import { bootstrap } from 'global-agent'

export default function nodeProxySetup() {
  const { APPCUBE_HTTP_PROXY, APPCUBE_NO_PROXY } = process.env

  if (APPCUBE_HTTP_PROXY) {
    // Set proxy for intranet
    process.env.GLOBAL_AGENT_NO_PROXY = APPCUBE_NO_PROXY
    process.env.GLOBAL_AGENT_HTTP_PROXY = APPCUBE_HTTP_PROXY
    bootstrap()
  }
}
