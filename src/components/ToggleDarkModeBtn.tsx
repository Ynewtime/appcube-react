import { darkAtom } from '@/modules/theme'
import { classNames } from '@/modules/utils'
import { useAtom } from 'jotai'
import * as R from 'ramda'
import * as React from 'react'

export default React.memo(function ToggleDarkModeBtn({ className = '' }: { className?: string }) {
  const [isDark, setDark] = useAtom(darkAtom)
  return (
    <div
      onClick={() => setDark(R.not)}
      className={classNames(
        'cursor-pointer h-5 w-5 color-base',
        isDark ? 'i-heroicons-outline:moon' : 'i-heroicons-outline:sun',
        className,
      )}
    />
  )
})
