import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'admin',
        password: 'admin123', // pas hashé pour l'instant
        isAdmin: true,
        // creationDate: new Date(),
      },
      {
        username: 'johndoe',
        password: 'password123',
        isAdmin: false,
        // creationDate: new Date(),
      },
    ])
  }
}
