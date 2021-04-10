import { setCookie, destroyCookie } from 'nookies'
import { isStagingEnv } from '../../infra/env/isStagingEnv'
import { HttpClient } from '../../infra/http/HttpClient'

const BASE_URL = isStagingEnv
  // URL de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // URL DE PROD
  : 'https://instalura-api-git-master-omariosouto.vercel.app'

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN'

export const loginService = {
  async login(
    { username, password },
    setCookieModule = setCookie,
    HttpClientModule = HttpClient
  ) {
    return HttpClientModule(`${ BASE_URL }/api/login`, {
      method: 'POST',
      body: { username, password }
    })
      .then(convertedResponse => {
        // Escrever os testes
        // Salvar os tokens
        const { token } = convertedResponse.data
        const hasToken = token
        if (!hasToken) {
          throw new Error('Failed to login')
        }
        setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
          path: '/',
          maxAge: 86400 // Segundos
        })
        return { token }
      })
  },
  async logout(context, destroyCookieModule = destroyCookie) {
    destroyCookieModule(context, LOGIN_COOKIE_APP_TOKEN, {
      path: '/'
    })
  }
}
