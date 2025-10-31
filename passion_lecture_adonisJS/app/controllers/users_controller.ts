import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ response }: HttpContext) {
    const users = await User.query().orderBy('username')
    return response.ok(users)
  }

  async store({ request, response }: HttpContext) {
    const { username, isAdmin } = request.only(['username', 'isAdmin','password'])

    const user = await User.create({
      username,
      isAdmin: isAdmin ?? false,

    })

    return response.created(user)
  }

  async show({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    return response.ok(user)
  }

  async update({ params, request, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const { username, isAdmin } = request.only(['username', 'isAdmin', 'password'])

    if (username) user.username = username
    if (typeof isAdmin !== 'undefined') user.isAdmin = isAdmin

    await user.save()
    return response.ok(user)
  }

  async destroy({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.noContent()
  }
}
