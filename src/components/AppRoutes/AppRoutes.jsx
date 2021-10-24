import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

import { AuthGuard } from './AuthGuard'
import { Login } from '../../pages/Login/Login'
import { ChangePas } from '../../pages/ChangePas/ChangePas'
import { Authorization } from '../../pages/Authorization/Authorization'

export const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/Login" exact>
        <Login />
      </Route>

      <Route path="/Authorization" exact>
        <Authorization />
      </Route>

      <Route path="/Change" exact>
        <AuthGuard>
          <ChangePas />
        </AuthGuard>
      </Route>

      <Redirect to="/Login" />
    </Switch>
  </BrowserRouter>
)
