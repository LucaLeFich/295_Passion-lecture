import Category from '#models/category'
import { categoriesValidator } from '#validators/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    const categories = await Category.query().orderBy('label')
    return response.ok(categories)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    // Récupération des données envoyées par le client et validation des données
    const { label } = await request.validateUsing(categoriesValidator)
    // Création d'une nouvelle catégorie avec les données validées
    const category = await Category.create({ label })
    // On utilise `response.created` pour retourner un code HTTP 201 avec les données de la catégorie créée
    return response.created(category)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    console.log(params.id)
    return await Category.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    // Récupération des données envoyées par le client et validation des données
    await request.validateUsing(categoriesValidator)
    // Récuperation des données
    const data = request.only(['label'])
    // Vérification de l'existence de la catégorie
    const category = await Category.findOrFail(params.id)
    // Mise à jour des données de la catégorie
    category.merge(data)
    // Sauvegarde des modifications
    await response.created(category)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    // Vérification de l'existence de la catégorie
    const category = await Category.findOrFail(params.id)
    // Suppression de la catégorie
    return await category.delete()
  }
}