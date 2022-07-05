import dotenv from 'dotenv-flow'
import nodeProxySetup from './nodeProxySetup'

// Setting up env for node, no need if using bun.js
if (!process.env.APPCUBE_DOMAIN) dotenv.config()

// Setting up node proxy for developing in Huawei intranet
nodeProxySetup()
