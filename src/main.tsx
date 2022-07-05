import ErrorFallback from '@/components/ErrorFallback'
import PageLoading from '@/components/PageLoading'
import '@/index.css'
import '@/modules/i18n'
import Router from '@/modules/Router'
import { log } from '@/modules/utils'
import setup from '@/setup'
import '@unocss/reset/tailwind.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import 'uno.css'

log(`Build time: ${BUILD_TIME}`)

setup()

const container = document.getElementById('root') || document.body

const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Suspense fallback={<PageLoading />}>
        <Router />
      </React.Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
)
