import { setCookies, destroyCookie } from 'nookies'

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

export const loginService = {
  async login({ username, password }) {
    return HttpClient(
      'https://instalura-api.omariosouto.vercel.app/api/login', {
        method: 'POST',
        body: { username, password }
      }
    )
      .then(convertedResponse => {
        // Escrever os testes
        // Salvar os tokens
        const { token } = convertedResponse.data
        setCookies(null, 'APP_TOKEN', token, {
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
