import type { HttpContext } from '@adonisjs/core/http'
import Bookepub from '#models/bookepub'
 
export default class BookepubsController {
  /**
   * Liste tous les bookepubs (sans le contenu binaire)
   */
  async index({ response }: HttpContext) {
    const bookepubs = await Bookepub.query()
      .select('id', 'name', 'created_at', 'updated_at')
 
    return response.ok(bookepubs)
  }
 
  /**
   * Upload et stockage d'un bookepub
   */
  async store({ request, response }: HttpContext) {
    const bookepub = request.file('bookepub', {
      size: '64mb',
    })
 
    if (!bookepub) {
      return response.badRequest({ message: 'Aucun fichier fourni' })
    }
 
    if (!bookepub.isValid) {
      return response.unprocessableEntity({ errors: bookepub.errors })
    }
 
    // Lecture du fichier en Buffer pour le LONGBLOB
    const fs = await import('node:fs/promises')
    const content = await fs.readFile(bookepub.tmpPath!)
 
    const bookepubRecord = await Bookepub.create({
      name: bookepub.clientName,
      content: content
    })
 
    return response.created({
      message: 'Fichier uploadé avec succès',
      id: bookepubRecord.id,
      name: bookepubRecord.name,
    })
  }
 
  /**
   * Télécharger / afficher un fichier
   */
  async show({ params, response }: HttpContext) {
    const epub = await Bookepub.findOrFail(params.id)
 
    // Détection du type MIME selon l'extension
    const { lookup } = await import('mime-types')
    const mimeType = lookup(epub.name) || 'application/octet-stream'
 
    response.header('Content-Type', mimeType)
    response.header('Content-Disposition', `inline; filename="${epub.name}"`)
 
    return response.send(epub.content)
  }
 
  /**
   * Téléchargement forcé
   */
  async download({ params, response }: HttpContext) {
    const epub = await Bookepub.findOrFail(params.id)
 
    const { lookup } = await import('mime-types')
    const mimeType = lookup(epub.name) || 'application/octet-stream'
 
    response.header('Content-Type', mimeType)
    response.header('Content-Disposition', `attachment; filename="${epub.name}"`)
 
    return response.send(epub.content)
  }
 
  /**
   * Suppression d'un fichier
   */
  async destroy({ params, response }: HttpContext) {
    const epub = await Bookepub.findOrFail(params.id)
    await epub.delete()
 
    return response.ok({ message: 'Fichier supprimé avec succès' })
  }
}