import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import userState from '../utils/userState'

const RouteValidator = ({
  isAuth, hasSidebar, hasNavbar, component: Component, path,
}) => {
  if (path === '/') return <Redirect to='/home' />
  if (isAuth) {
    if (userState.isLoggedIn()) {
      return (
        <Component />
      )
    }
    return (
      <Redirect to={ {
        pathname: '/login',
      } }
      />
    )
  }
}

export default RouteValidator
