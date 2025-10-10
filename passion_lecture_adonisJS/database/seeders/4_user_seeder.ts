import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'admin',
        hashPassword: 'admin123', // pas hashé pour l'instant
        isAdmin: true,
        creationDate: new Date(),
      },
      {
        username: 'johndoe',
        hashPassword: 'password123',
        isAdmin: false,
        creationDate: new Date(),
      },
    ])
  }
}
