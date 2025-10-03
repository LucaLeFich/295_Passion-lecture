import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class extends BaseSeeder {
  async run() {

    await Category.createMany([
      { label: 'Action'},
      { label: 'Thriller'},
      { label: 'Romance'},
      { label: 'Horreur'},
      { label: 'Science-Fiction'}
    ])
  }
}