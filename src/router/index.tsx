import { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelector } from '@/store'
import { routes, CustomRouteProps } from './routes'

export function RouterViewProvider() {
  // __RENDER
  return (
    <Suspense fallback={<i style={{ padding: '2rem' }}>Loading...</i>}>
      <Switch>
        {routes.map((route) => (
          <RouterGuard
            key={route.key}
            name={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
            requiresAuth={route.requiresAuth}
          />
        ))}

        <Route path='*' component={() => <Redirect to='/' />} />
      </Switch>
    </Suspense>
  )
}

/**
 * A wrapper for <Route> that redirects to the login
 * screen if you're not yet authenticated.
 */
export function RouterGuard({ name, requiresAuth, ...props }: CustomRouteProps) {
  const isAuthenticated = useSelector(authSelector.getAuthenticated)

  if (isAuthenticated) {
    if (['connection'].includes(name)) {
      return <Redirect to='/' />
    }
  } else {
    if (requiresAuth) {
      const to = `/connection?fallback=${name}`
      return <Redirect to={to} />
    }
  }

  return <Route {...props} />
}
