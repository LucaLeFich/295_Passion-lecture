import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Writer from '#models/writer'

export default class WriterSeeder extends BaseSeeder {
  public async run() {
    await Writer.createMany([
      { firstname: 'George', name: 'Orwell' },
      { firstname: 'Jane', name: 'Austen' },
      { firstname: 'Haruki', name: 'Murakami' },
      { firstname: 'J.K.', name: 'Rowling' },
      { firstname: 'Agatha', name: 'Christie' },
      { firstname: 'Leo', name: 'Tolstoy' },
      { firstname: 'Isabel', name: 'Allende' },
      { firstname: 'Victor', name: 'Hugo' },
      { firstname: 'Mary', name: 'Shelley' },
      { firstname: 'Stephen', name: 'King' },
    ])
  }
}
