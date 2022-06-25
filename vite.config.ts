import React from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import * as path from 'path'
import Unocss from 'unocss/vite'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import './scripts/envSetup'

const { VITE_DOMAIN } = process.env

export default defineConfig(async () => {
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
