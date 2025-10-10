import Book from '#models/book'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'
import Writer from '#models/writer'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    const categories = await Category.all()
    const writers = await Writer.all()
    const users = await User.all()

    console.log('Categories:', categories.length)
    console.log('Writers:', writers.length)
    console.log('Users:', users.length)
    // Write your database queries inside the run method
    await Book.createMany([
      {
        title: 'L’Ombre du Vent',
        numberOfPage: 565,
        pdfLink: 'books/lombre-du-vent.pdf',
        abstract: 'Un roman mystérieux qui explore la mémoire et les livres oubliés.',
        editor: 'Actes Sud',
        editionYear: 2004,
        imagePath: 'images/lombre-du-vent.jpg',
        categoryId: categories[1].id,
        writerId: writers[1].id,
        userId: users[1].id,
      },
      {
        title: '1984',
        numberOfPage: 328,
        pdfLink: 'books/1984.pdf',
        abstract: 'Une dystopie où Big Brother surveille tout.',
        editor: 'Secker & Warburg',
        editionYear: 1949,
        imagePath: 'images/1984.jpg',
        categoryId: categories[2].id,
        writerId: writers[2].id,
        userId: users[1].id,
      },
      {
        title: 'Le Seigneur des Anneaux',
        numberOfPage: 1200,
        pdfLink: 'books/lotr.pdf',
        abstract: 'Épopée fantastique de la Terre du Milieu.',
        editor: 'Allen & Unwin',
        editionYear: 1954,
        imagePath: 'images/lotr.jpg',
        categoryId: categories[3].id,
        writerId: writers[3].id,
        userId: users[1].id,
      },
      {
        title: 'Harry Potter à l’école des sorciers',
        numberOfPage: 309,
        pdfLink: 'books/hp1.pdf',
        abstract: 'Le premier tome de la saga Harry Potter.',
        editor: 'Bloomsbury',
        editionYear: 1997,
        imagePath: 'images/hp1.jpg',
        categoryId: categories[3].id,
        writerId: writers[4].id,
        userId: users[1].id,
      },
      {
        title: 'La Peste',
        numberOfPage: 320,
        pdfLink: 'books/la-peste.pdf',
        abstract: 'Un récit allégorique sur une épidémie dans une ville.',
        editor: 'Gallimard',
        editionYear: 1947,
        imagePath: 'images/la-peste.jpg',
        categoryId: categories[4].id,
        writerId: writers[5].id,
        userId: users[1].id,
      },
      {
        title: 'Don Quichotte',
        numberOfPage: 863,
        pdfLink: 'books/don-quichotte.pdf',
        abstract: 'Les aventures d’un chevalier idéaliste.',
        editor: 'Francisco de Robles',
        editionYear: 1605,
        imagePath: 'images/don-quichotte.jpg',
        categoryId: categories[3].id,
        writerId: writers[2].id,
        userId: users[1].id,
      },
      {
        title: 'Le Petit Prince',
        numberOfPage: 96,
        pdfLink: 'books/le-petit-prince.pdf',
        abstract: 'Un conte poétique et philosophique.',
        editor: 'Gallimard',
        editionYear: 1943,
        imagePath: 'images/le-petit-prince.jpg',
        categoryId: categories[2].id,
        writerId: writers[2].id,
        userId: users[1].id,
      },
      {
        title: 'Les Misérables',
        numberOfPage: 1463,
        pdfLink: 'books/les-miserables.pdf',
        abstract: 'Chef-d’œuvre de Victor Hugo sur la misère sociale.',
        editor: 'A. Lacroix',
        editionYear: 1862,
        imagePath: 'images/les-miserables.jpg',
        categoryId: categories[3].id,
        writerId: writers[7].id,
        userId: users[1].id,
      },
      {
        title: 'Crime et Châtiment',
        numberOfPage: 671,
        pdfLink: 'books/crime-et-chatiment.pdf',
        abstract: 'Un étudiant commet un meurtre et lutte avec sa conscience.',
        editor: 'The Russian Messenger',
        editionYear: 1866,
        imagePath: 'images/crime-et-chatiment.jpg',
        categoryId: categories[1].id,
        writerId: writers[9].id,
        userId: users[1].id,
      },
      {
        title: 'L’Étranger',
        numberOfPage: 123,
        pdfLink: 'books/letranger.pdf',
        abstract: 'Meursault, un homme détaché, tue un Arabe sans raison apparente.',
        editor: 'Gallimard',
        editionYear: 1942,
        imagePath: 'images/letranger.jpg',
        categoryId: categories[2].id,
        writerId: writers[3].id,
        userId: users[1].id,
      },
    ])
  }
}
