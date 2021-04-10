import { loginService } from './loginService'

const token = 'fake-token'
async function HttpClientModule() {
  return {
    data: {
      token
    }
  }
}
async function HttpClientModuleError() {
  return {
    data: {},
    error: {
      message: 'Failed to login'
    }
  }
}
const setCookieModule = jest.fn()

describe('loginService', () => {
  describe('login()', () => {
    // Login bem sucedido
    describe('when user try to login and succeed', () => {
      describe('and succeed', () => {
        test('store its token', async () => {
          const loginServiceResponse = await loginService.login({
            username: 'omariosouto',
            passowrd: 'senhasegura'
          }, setCookieModule, HttpClientModule)
          // espero que salve o cookie
          expect(setCookieModule).toHaveBeenCalledWith(
            null, 'APP_TOKEN', token, {
              path: '/',
              maxAge: 86400
            }
          )
          expect(loginServiceResponse).toEqual({ token })
        })
      })
      describe('and it fails', () => {
        test('throws an error', async () => {
          await expect(loginService.login({
            username: 'omariosouto',
            passowrd: 'senhasegura'
          }, setCookieModule, HttpClientModuleError))
            .rejects
            .toThrow('Failed to login')
        })
      })
    })
  })
  describe('logout()', () => {
    // Logout bem sucedido
    describe('when user try to logout and succeed', () => {
      test('remote its token', async () => {
        const destroyCookie = jest.fn()
        await loginService.logout(null, destroyCookie)
        // espero que apague o token
        expect(destroyCookie).toHaveBeenCalledWith(null, 'APP_TOKEN')
      })
    })
  })
})
