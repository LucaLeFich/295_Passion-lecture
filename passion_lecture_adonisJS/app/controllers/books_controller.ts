import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import bookValidator from '#validators/book'

export default class BooksController {
  async index({ response }: HttpContext) {
    const books = await Book.query().orderBy('title')
    return response.ok(books)
  }

  async store({ request, response, auth }: HttpContext) {
    const {
      title,
      numberOfPage,
      pdfLink,
      abstract,
      editor,
      editionYear,
      imagePath,
      idCategory,
      idWriter,
    } = await request.validateUsing(bookValidator)
    
    // Récupérer l'utilisateur connecté
    const user = auth.getUserOrFail()
    
    const book = await Book.create({
      title,
      numberOfPage,
      pdfLink,
      abstract,
      editor,
      editionYear,
      imagePath,
      categoryId: idCategory,
      writerId: idWriter,
      userId: user.id,
    })
    return response.created(book)
  }

  // à modifier
  async show({ params, response }: HttpContext) {
    console.log(params.id)
    const book = await Book.query()
      .preload('category')
      .preload('writer')
      .where('id', params.id)
      .firstOrFail()
    return response.ok(book)
  }

  async update({ params, request, auth }: HttpContext) {
    const {
      title,
      numberOfPage,
      pdfLink,
      abstract,
      editor,
      editionYear,
      imagePath,
      idCategory,
      idWriter,
    } = await request.validateUsing(bookValidator)
    
    // Récupérer l'utilisateur connecté
    const user = auth.getUserOrFail()
    
    const book = await Book.findOrFail(params.id)
    book.merge({
      title,
      numberOfPage,
      pdfLink,
      abstract,
      editor,
      editionYear,
      imagePath,
      categoryId: idCategory,
      writerId: idWriter,
      userId: user.id,
    })

    await book.save()
    return book
  }

  async destroy({ params, response }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    await book.delete()
    return response.noContent()
  }
}
