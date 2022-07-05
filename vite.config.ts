import React from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import * as path from 'path'
import Unocss from 'unocss/vite'
import type { UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import nodeProxySetup from './scripts/nodeProxySetup'

export default defineConfig(async ({ mode }) => {
  process.env = loadEnv(mode, process.cwd(), '')

  // Setting up node proxy for developing in Huawei intranet
  nodeProxySetup()

  // Proxy for connecting to AppCube Services
  const { APPCUBE_DOMAIN } = process.env
  const proxy = {
    target: APPCUBE_DOMAIN,
    changeOrigin: true,
  }

  const baseConfig: UserConfig = {
    base: './',
    build: {
      outDir: 'build/dist',
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },
    css: {
      postcss: {
        plugins: [require('postcss-nested')],
      },
    },
    define: {
      BUILD_TIME: JSON.stringify(new Date().toLocaleString()),
    },
    envPrefix: 'APPCUBE_',
    plugins: [React({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }), Unocss()],
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
      ],
    },
    server: {
      proxy: {
        '/baas': proxy,
        '/u-route': proxy,
        '/service': proxy,
      },
    },
  }
  return baseConfig
})
