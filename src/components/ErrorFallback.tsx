import * as React from 'react'
import { FallbackProps } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'

export default React.memo(function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const { t } = useTranslation()

  return (
    <div role="alert" className="flex flex-col h-screen bg-blue-gray-800 text-gray-800 items-center">
      <div className="rounded-b bg-red-50 border-t-4 border-red-500 mt-4 p-4 w-2/3">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl text-red-500">{t('app_error_dialog')}</h1>
          <button
            className="text-current"
            onClick={() => {
              resetErrorBoundary()
              location.reload()
            }}
          >
            {t('retry')}
          </button>
        </div>
        <div className="space-y-4 mt-10 w-full  v-stack items-start">
          <p>{t('something_went_wrong')}</p>
          <pre className="border max-h-md space-y-4 border-red-300 w-full p-2 text-red-500 overflow-y-auto">
            <div>
              <span>{error.name}</span>: <span className="text-red-700">{error.message}</span>
            </div>
            <details>
              <summary className="select-none focus:outline-none">{t('error_details')}</summary>
              {error.stack}
            </details>
          </pre>
          <p>{t('contact_support')}</p>
        </div>
      </div>
    </div>
  )
})
