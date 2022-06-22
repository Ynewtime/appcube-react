import Oops from '@/components/404'
import BaseLayout from '@/layouts/Base'
import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const matcher = (s: string) => s.match(/\.\/pages\/(.*)\.tsx$/)

// Sync Router

type RouteProp = {
  name: string
  path: string
  component: React.FunctionComponent
}
// For Vite 3:
const pages = import.meta.glob<{ default: React.FunctionComponent }>('../pages/*.tsx', { eager: true })
// For Vite 2:
// const pages = import.meta.globEager('../pages/*.tsx')
const routes = Object.keys(pages).reduce((acc, elem) => {
  const matched = matcher(elem)
  if (matched?.length) {
    const [, name] = matched
    const component = pages[elem].default
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
}, [] as RouteProp[])

export default function Router(): JSX.Element {
  return (
    <HashRouter>
      <BaseLayout>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Oops />} />
        </Routes>
      </BaseLayout>
    </HashRouter>
  )
}
