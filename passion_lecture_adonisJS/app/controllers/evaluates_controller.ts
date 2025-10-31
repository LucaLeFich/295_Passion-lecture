import Evaluate from '#models/evaluate'
import type { HttpContext } from '@adonisjs/core/http'

export default class EvaluatesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const evaluates = await Evaluate.query().orderBy('note')
    return evaluates
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { score, idUser, idBook } = request.only(['score', 'idUser', 'idBook'])
    const evaluate = await Evaluate.create({ userId: idUser, bookId: idBook, note: score })
    return evaluate
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    console.log(params.id)
    const evaluate = await Evaluate
      .query()
      .preload('user')
      .preload('book')
      .where('id', params.id)
      .firstOrFail()
    return evaluate
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const { score, idUser, idBook } = request.only(['score', 'idUser', 'idBook'])
    const evaluate = await Evaluate.findOrFail(params.id)
    evaluate.merge({ userId: idUser, bookId: idBook, note: score })
    await evaluate.save()
    return evaluate
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const evaluate = await Evaluate.findOrFail(params.id)
    await evaluate.delete()
  }
}