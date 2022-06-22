import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function OopsPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <main className="h-screen grid place-items-center">
      <section className="flex flex-col space-y-8 items-center justify-center">
        <div className="font-bold text-2xl">Oops, 404 Page Not Found.</div>
        <a className="cursor-pointer flex space-x-4 text-base items-center" onClick={() => navigate('/')}>
          <div className="h-4 w-4 i-heroicons-outline:arrow-left" />
          <span>{t('back_to_index_page')}</span>
        </a>
      </section>
    </main>
  )
}
