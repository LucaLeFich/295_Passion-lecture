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


// Routes publiques (GET seulement - lecture)
router.get('books', [BooksController, 'index'])
router.get('books/:id', [BooksController, 'show'])
router.get('writers', [WritersController, 'index'])
router.get('writers/:id', [WritersController, 'show'])
router.get('categories', [CategoriesController, 'index'])
router.get('categories/:id', [CategoriesController, 'show'])

// Routes protégées (POST, PUT, DELETE - modification)
router
  .group(() => {
    // Books - opérations de modification
    router.post('books', [BooksController, 'store'])
    router.put('books/:id', [BooksController, 'update'])
    router.delete('books/:id', [BooksController, 'destroy'])

    // Writers - opérations de modification
    router.post('writers', [WritersController, 'store'])
    router.put('writers/:id', [WritersController, 'update'])
    router.delete('writers/:id', [WritersController, 'destroy'])

    // Categories - opérations de modification
    router.post('categories', [CategoriesController, 'store'])
    router.put('categories/:id', [CategoriesController, 'update'])
    router.delete('categories/:id', [CategoriesController, 'destroy'])

    // Users - toutes les opérations (sensibles)
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
  })
  .use(middleware.auth())
 

router
  .group(() => {
    router.post('register', [AuthController, 'register'])
    router.post('login', [AuthController, 'login'])
    router.post('logout', [AuthController, 'logout']).use(middleware.auth())
  })
  .prefix('users')
