import { setCookie, destroyCookie } from 'nookies'
import { isStagingEnv } from '../../infra/env/isStagingEnv'

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    ...options
  })
    .then(serverResponse => {
      if (serverResponse.ok) {
        return serverResponse.json()
      }
      throw new Error('Falha em pegar os dados do servidor')
    })
}

const BASE_URL = isStagingEnv
  // URL de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // URL DE PROD
  : 'https://instalura-api-git-master-omariosouto.vercel.app'

export const loginService = {
  async login({ username, password }) {
    return HttpClient(`${ BASE_URL }/api/login`, {
      method: 'POST',
      body: { username, password }
    })
      .then(convertedResponse => {
        // Escrever os testes
        // Salvar os tokens
        const { token } = convertedResponse.data
        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: 86400 // Segundos
        })
        return { token }
      })
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN')
  }
}
