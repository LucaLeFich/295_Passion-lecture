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
import AuthController from '#controllers/auth_controller'
import { middleware } from './kernel.js'
// Route test
router.get('test', async () => {
  return { message: 'API is working!' }
})

// Routes REST
router.resource('writers', WritersController).apiOnly()
router.resource('books', BooksController).apiOnly()
router.resource('categories', CategoriesController).apiOnly()
router.resource('users', UsersController).apiOnly()

router
    .group(() => {
        router.post('register', [AuthController, 'register'])
        router.post('login', [AuthController, 'login'])
        router.post('logout', [AuthController, 'logout']).use(middleware.auth())
    })
    .prefix('user')