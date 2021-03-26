import * as React from 'react'
import { Route } from 'react-router-dom'

// Properties passed to RouteWithProps
type RouteProps = {
  component: any // rendered component
  componentProps?: any // properties passed to the component
  [propName: string]: any // route properties
}
// Properties passed to AuthRoute
type AuthRouteProps = {
  component: any // rendered component
  auth: boolean // tells if the component should be rendered
  [propName: string]: any // route properties
}

/**
 * Pass properties to rendered component
 * @param param0 RouteProps
 */
const RouteWithProps = ({
  component: Component,
  componentProps = {},
  ...routeProps
}: RouteProps) => (
  <Route {...routeProps} render={(props) => <Component {...props} {...componentProps} />} />
)

/**
 * Only render component route if authentication is successful
 * @param param0
 */
const AuthRoute = ({ component: Component, auth, ...rest }: AuthRouteProps) => (
  <Route {...rest} render={(props) => (auth ? <Component {...props} /> : null)} />
)

/**
 * Render component and pass properties if authentication is successful
 * @param param0
 */
const AuthRouteWithProps = ({
  component: Component,
  componentProps,
  auth,
  ...routeProps
}: RouteProps & AuthRouteProps) =>
  auth ? (
    <RouteWithProps component={Component} componentProps={componentProps} {...routeProps} />
  ) : null

export { RouteWithProps, AuthRoute, AuthRouteWithProps }