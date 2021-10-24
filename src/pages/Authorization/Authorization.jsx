import React from 'react'

import './Authorization.css'
import { Layout } from '../../Layout/Layout'

export const Authorization = () => (
  <Layout>
    <div className={'authorization_container'}>
      <form className="authorization">
        <input name="Email" placeholder="Email" required />
        <input name="Password" placeholder="Password" required />
        <input name="Password_repeat" placeholder="Repeat Password" required />
        <button type="submit">Отправить</button>
      </form>
    </div>
  </Layout>
)
