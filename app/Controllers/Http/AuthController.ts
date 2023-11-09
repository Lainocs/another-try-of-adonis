import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(UserValidator)

    const user = await User.create({
      username: validatedData.username,
      password: await Hash.make(validatedData.password)
    })

    return response.created(user)
  } 

  public async login({ auth, request, response }: HttpContextContract) {
    const validatedData = await request.validate(UserValidator)

    const token = await auth.use('api').attempt(validatedData.username, validatedData.password)

    return response.ok(token)
  }

  public async me({ auth, response }: HttpContextContract) {
    return response.ok(auth.user)
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()

    return response.ok(null)
  }
}
