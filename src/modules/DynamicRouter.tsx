import Oops from '@/components/404'
import PageLoading from '@/components/PageLoading'
import BaseLayout from '@/layouts/Base'
import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const matcher = (s: string) => s.match(/\.\/pages\/(.*)\.tsx$/)

// Async Router

type DynamicRouteProp = {
  name: string
  path: string
  component: React.LazyExoticComponent<React.ComponentType<unknown>>
}
type Factory = () => Promise<{ default: React.ComponentType<unknown> }>
const dynamicPages = import.meta.glob('../pages/*.tsx')
const dynamicRoutes = Object.keys(dynamicPages).reduce((acc, elem) => {
  const matched = matcher(elem)
  if (matched?.length) {
    const [, name] = matched
    const component = React.lazy(dynamicPages[elem] as Factory)
    if (name.toLowerCase() === 'index') {
      acc.push({
        name,
        path: `/`,
        component,
      })
    } else {
      acc.push({
        name,
        path: `/${name}`,
        component,
      })
    }
  }
  return acc
}, [] as DynamicRouteProp[])

export default function DynamicRouter(): JSX.Element {
  return (
    <HashRouter>
      <BaseLayout>
        <Routes>
          {dynamicRoutes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <React.Suspense fallback={<PageLoading />}>
                  <Component />
                </React.Suspense>
              }
            />
          ))}
          <Route path="*" element={<Oops />} />
        </Routes>
      </BaseLayout>
    </HashRouter>
  )
}
