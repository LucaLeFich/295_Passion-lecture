/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
*/

import router from '@adonisjs/core/services/router'

// Import des contrôleurs
import WritersController from '#controllers/writers_controller'
import BooksController from '#controllers/books_controller'
import CategoriesController from '#controllers/categories_controller'
import UsersController from '#controllers/users_controller'

// Route test
router.get('test', async () => {
  return { message: 'API is working!' }
})

// Routes REST
router.resource('writers', WritersController).apiOnly()
router.resource('books', BooksController).apiOnly()
router.resource('categories', CategoriesController).apiOnly()
router.resource('users', UsersController).apiOnly()
