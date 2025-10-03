import Writer from '#models/writer'
import { writerValidator } from '#validators/writer'
import type { HttpContext } from '@adonisjs/core/http'

export default class WritersController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const writers = await Writer.query().orderBy('name').orderBy('firstname')
    return response.ok(writers)
  }

  /**
   * Add a writer
   */
  async store({ request, response }: HttpContext) {
    const { name, firstname } = await request.validateUsing(writerValidator)
    const writer = await Writer.create({ name, firstname })
    return response.created(writer) // 201
  }

  /**
   * Edit individual record
   */
  async show({ params, response }: HttpContext) {
    const writer = await Writer.findOrFail(params.id)
    return response.ok(writer) // 200
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const { name, firstname } = await request.validateUsing(writerValidator)
    const writer = await Writer.findOrFail(params.id)
    writer.merge({ name, firstname })
    await writer.save()
    return response.ok(writer) // 200
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const writer = await Writer.findOrFail(params.id)
    await writer.delete()
    return response.noContent() // 204 (aucun contenu à retourner)
  }
}
