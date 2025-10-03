import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'

export default class BooksController {

async index({ response }: HttpContext) {
    const books = await Book.query().orderBy('title')  
    return response.ok(books)
  }







}