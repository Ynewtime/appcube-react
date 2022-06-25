import React from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import * as path from 'path'
import Unocss from 'unocss/vite'
import type { UserConfig } from 'vite'
// import { defineConfig, loadEnv } from 'vite'
import { defineConfig } from 'vite'
import { getAccessToken } from './scripts/services'

const { VITE_DOMAIN } = process.env

export default defineConfig(async ({ mode }) => {
  // Has bug in Windows, disable for now:
  // process.env = { ...process.env, ...loadEnv(mode, __dirname) }

  // In production mode, generate a ACCESS_TOKEN first:
  let ACCESS_TOKEN = ''
  if (mode === 'production') {
    ACCESS_TOKEN = await getAccessToken()
  }

  const proxy = {
    target: VITE_DOMAIN,
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
      ACCESS_TOKEN: JSON.stringify(ACCESS_TOKEN),
    },
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
