import Comment from '#models/comment'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Comment.createMany([
          {
            content: 'Great book!',
            userId: 1,
            bookId: 1,
          },
          {
            content: 'Very informative.',
            userId: 2,
            bookId: 2,
          },
          {
            content: 'A must-read for everyone.',
            userId: 1,
            bookId: 3,
          },
          {
            content: 'I learned a lot from this book.',
            userId: 2,
            bookId: 1,
          },
          {
            content: 'Well written and engaging.',
            userId: 1,
            bookId: 2,
          },
          {
            content: 'Highly recommend it!',
            userId: 2,
            bookId: 3,
          },
        ])
      
  }
}