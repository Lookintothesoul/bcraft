import React from 'react'

import './ChangePas.css'
import { Layout } from '../../Layout/Layout'

export const ChangePas = () => {
  return (
    <Layout>
      <div className="changePas_container">
        <form className="changePas_form">
          <input name="Password" placeholder="Password" required />
          <input name="NewPassword" placeholder="Email" required />
          <input
            name="NewPassword_repeat"
            placeholder="Repeat New Password"
            required
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </Layout>
  )
}
