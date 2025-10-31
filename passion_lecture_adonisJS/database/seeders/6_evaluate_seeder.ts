import Evaluate from '#models/evaluate'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Evaluate.createMany([
      {
        note: 3,
        userId: 1,
        bookId: 1,
      },
      {
        note: 4,
        userId: 2,
        bookId: 2,
      },
    ])
  }
}