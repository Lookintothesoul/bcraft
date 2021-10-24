import React from 'react'
import { Redirect } from 'react-router-dom'

import { isAuth } from '../../utils/helpers'

export const AuthGuard = ({ children }) => {
  if (!isAuth()) {
    return <Redirect to={'/Login'} />
  }

  return <>{children}</>
}
