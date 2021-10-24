import React, { useState, useEffect, useRef } from 'react'

import './Login.css'
import { Layout } from '../../Layout/Layout'
import { requestAPI } from '../../request/axiosMock'

export const Login = () => {
  const formDataRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMassage, setErrorMessage] = useState('')

  const handlerSubmitForm = (e) => {
    e.preventDefault()

    requestAPI
      .post('/login', { email, password })
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
      })
      .catch(() => setErrorMessage('Email and Password not match'))
  }

  useEffect(() => {
    formDataRef.current = { email, password }
  }, [email, password])

  useEffect(() => {
    const loginFormData = localStorage.getItem('login_form_data')

    if (loginFormData) {
      const loginFormDataParsed = JSON.parse(loginFormData)
      setEmail(loginFormDataParsed.email)
      setPassword(loginFormDataParsed.password)

      formDataRef.current = loginFormDataParsed
    }

    return () => {
      if (!formDataRef.current) return

      localStorage.setItem(
        'login_form_data',
        JSON.stringify(formDataRef.current),
      )
    }
  }, [])

  return (
    <Layout>
      <div className="login_container">
        <form className="login_form" onSubmit={handlerSubmitForm}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Отправить</button>
        </form>

        {errorMassage && <div style={{ color: 'red' }}>{errorMassage}</div>}
      </div>
    </Layout>
  )
}
