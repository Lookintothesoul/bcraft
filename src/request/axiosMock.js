import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const requestAPI = axios.create()

const mock = new MockAdapter(requestAPI, { delayResponse: 2000 })

mock
  .onPost('/login', { email: 'valid@mail.com', password: 'password' })
  .reply(200, {
    token: 'auth_token',
  })
