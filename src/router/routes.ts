import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'
import Index from '@/pages/Index'

export const useLazy = (pathName: string) => lazy(() => import(`../pages${pathName}`))

export const routes: CustomRouteProps[] = [
  {
    key: '.index',
    path: '/',
    name: 'index',
    exact: true,
    requiresAuth: false,
    component: Index
  }
]

export interface CustomRouteProps extends RouteProps {
  key: string
  name: string
  requiresAuth?: boolean
}
