import ToggleDarkModeBtn from '@/components/ToggleDarkModeBtn'
import ToggleLngBtn from '@/components/ToggleLngBtn'
import { useTitle } from 'react-use'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export default React.memo(function DemoPage() {
  useTitle('System Configuration')

  const navigate = useNavigate()
  const back = () => navigate('/')

  return (
    <div className="min-h-screen auto-cols-fr auto-rows-fr grid select-none place-items-center">
      <ToggleDarkModeBtn className="hover-larger" />
      <ToggleLngBtn className="hover-scale" />
      <div onClick={back} className="cursor-pointer h-5 w-5 color-base i-heroicons-outline:arrow-left hover-larger" />
    </div>
  )
})
