import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoutesConfig } from './config/routes-config'
import { PageLoader } from './components/page-loader'

export const App = () => {
  return (
    <Routes>
      {Object.values(RoutesConfig).map(({ element, path, index }) => (
        <Route
          index={index}
          path={path}
          element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
          key={path}
        />
      ))}
    </Routes>
  )
}
