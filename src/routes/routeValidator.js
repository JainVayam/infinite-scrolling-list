import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

<<<<<<< 6c9aab4ba609156ab040ad7d50364d26d1fe42b5
import * as userState from '../utils/userState'
=======
import userState from '../utils/userState'
>>>>>>> Feature/login (#1)

const RouteValidator = ({
  isAuth, component: Component, path,
}) => {
<<<<<<< 6c9aab4ba609156ab040ad7d50364d26d1fe42b5
  if (path === '/login' && userState.isLoggedIn()) return <Redirect to='/home' />
=======
  if (path === '/') return <Redirect to='/home' />
>>>>>>> Feature/login (#1)
  if (isAuth) {
    if (userState.isLoggedIn()) {
      return (
        <Component />
      )
    }
  } else {
    return (
      <Component />
    )
  }
  return (
    <Redirect to='/login' />
  )
}

RouteValidator.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
}

export default RouteValidator
