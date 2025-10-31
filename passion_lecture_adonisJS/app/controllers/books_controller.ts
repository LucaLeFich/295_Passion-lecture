import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import bookValidator from '#validators/book'

export default class BooksController {
  async index({ response }: HttpContext) {
    const books = await Book.query().orderBy('title')
    return response.ok(books)
  }

  async store({ request, response }: HttpContext) {
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
      idUser,
    } = await request.validateUsing(bookValidator)
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
      userId: idUser,
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

  async update({ params, request }: HttpContext) {
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
      idUser,
    } = await request.validateUsing(bookValidator)
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
      userId: idUser,
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
