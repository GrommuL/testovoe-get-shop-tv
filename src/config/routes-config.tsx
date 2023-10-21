import { AppRoutes } from '@/common/constants/app-routes'
import { ApplicationPage } from '@/pages/application-page'
import { HomePage } from '@/pages/home-page'
import { SuccessPage } from '@/pages/success-page/success-page'
import { Navigate, RouteProps } from 'react-router-dom'

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.APPLICATION]: '/application',
  [AppRoutes.APPLICATION_SUCCESS]: '/success',
  [AppRoutes.NOT_FOUND]: '*'
}

export const RoutesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutesPath.home,
    element: <HomePage />
  },
  [AppRoutes.APPLICATION]: {
    path: RoutesPath.application,
    element: <ApplicationPage />
  },
  [AppRoutes.APPLICATION_SUCCESS]: {
    path: RoutesPath.application_success,
    element: <SuccessPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <Navigate replace to={RoutesPath.home} />
  }
}
