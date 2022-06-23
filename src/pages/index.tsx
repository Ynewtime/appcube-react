import { useTitle } from 'react-use'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export default React.memo(function IndexPage() {
  useTitle('AppCube React Widget Demo')
  const navigate = useNavigate()

  return (
    <div className="h-screen auto-cols-fr auto-rows-fr grid place-items-center">
      <span
        className="cursor-pointer h-5 w-5 i-heroicons-outline:arrow-right hover-larger"
        onClick={() => navigate('/demo')}
      />
    </div>
  )
})
