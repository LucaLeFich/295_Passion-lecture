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
import EvaluatesController from '#controllers/evaluates_controller'
import CommentsController from '#controllers/comments_controller'


router
  .group(() => {
    router.resource('books', BooksController).apiOnly()
    router.resource('writers', WritersController).apiOnly()
    router.resource('categories', CategoriesController).apiOnly()
    router.resource('users', UsersController).apiOnly()

    // /books/:book_id/comments
    router
      .group(() => {
        router.resource('comments', CommentsController).apiOnly()
      })
      .prefix('books/:book_id')

    // /books/:book_id/evaluations
    router
      .group(() => {
        router.resource('evaluations', EvaluatesController).apiOnly()
      })
      .prefix('books/:book_id')
      .use(middleware.auth())
  })
 

router
  .group(() => {
    router.post('register', [AuthController, 'register'])
    router.post('login', [AuthController, 'login'])
    router.post('logout', [AuthController, 'logout']).use(middleware.auth())
  })
  .prefix('users')
