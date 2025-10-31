import Comment from '#models/comment'
import type { HttpContext } from '@adonisjs/core/http'
import { commentValidator } from '#validators/comment'

export default class CommentsController {
  
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    
     const comment = await Comment.query().orderBy('createdAt')
     return response.ok(comment)
      
  }

  /**
   * Handle form submission for the create action
   */
  async store({ params, request, response, auth }: HttpContext) {
    // validate (idUser and idBook are optional in the validator)
    const { content, idUser, idBook } = await request.validateUsing(commentValidator)

    // Determine user and book ids: prefer payload, fall back to auth and route param
  const user = await auth.getUserOrFail()
  const finalUserId = idUser ?? user.id
    const finalBookId = idBook ?? params.book_id ?? params.bookId

    const comment = await Comment.create({ userId: finalUserId, bookId: finalBookId, content })
    return response.created(comment)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
  console.log(params.id) 
  const comment = await Comment
      .query()
      .preload('user')
      .preload('book')
      .where('id', params.id)
      .firstOrFail()
    return await Comment.findOrFail(comment.id)
}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, auth }: HttpContext) {
    const { content, idUser, idBook } = await request.validateUsing(commentValidator)
    const comment = await Comment.findOrFail(params.id)

    const user = await auth.getUserOrFail()
    const finalUserId = idUser ?? user.id
      const finalBookId = idBook ?? params.book_id ?? params.bookId

      comment.merge({ userId: finalUserId, bookId: finalBookId, content })
      await comment.save()
      return comment
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const comment = await Comment.findOrFail(params.id)
    await comment.delete()
    return response.noContent()
  }
}