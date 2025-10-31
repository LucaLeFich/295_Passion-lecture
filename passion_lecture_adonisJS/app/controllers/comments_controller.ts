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
  async store({ request, response }: HttpContext) {
    const {content, idUser, idBook} =await request.validateUsing(commentValidator)
    const comment = await Comment.create({userId:idUser, bookId:idBook, content})
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
  async update({ params, request }: HttpContext) {
    const {content, idUser, idBook} =await request.validateUsing(commentValidator)
    const comment = await Comment.findOrFail(params.id)
    comment.merge({userId:idUser, bookId:idBook, content})
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