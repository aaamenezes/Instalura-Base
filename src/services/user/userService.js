import { isStagingEnv } from '../../infra/env/isStagingEnv'
import { HttpClient } from '../../infra/http/HttpClient'
import { authService } from '../auth/authService'

const BASE_URL = isStagingEnv
  // URL de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // URL DE PROD
  : 'https://instalura-api-git-master-omariosouto.vercel.app'

export const userService = {
  async getProfilePage() {
    const url = `${ BASE_URL }/api/users/posts`
    try {
      const token = await authService(context).getToken()
      const response = await HttpClient(url, {
        headers: {
          Authorization: `Bearer ${ token }`
        }
      })
      return {
        user: {
          totalLikes: 100
        },
        posts: response.data
      }
    } catch (error) {
      throw new Error('Não consegui trazer os posts')
    }
  }
}
