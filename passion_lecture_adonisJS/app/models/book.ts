import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Category from './category.js'
import Writer from './writer.js'
import User from './user.js'
import type { Has, HasOne } from '@adonisjs/lucid/types/relations'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  /*title (string)
  numberOfPage (number)
  pdfLink (string)
  abstract (string)
  editor (string)
  editionYear (number)
  imagePath (string)
  idCategory hasOne (number)
  idWriter hasOne (number)
  idUser hasOne (number)*/ 

  @column()
  declare title: string

  @column()
  declare numberOfPage: number

  @column()
  declare pdfLink: string

  @column()
  declare abstract: string

  @column()
  declare editor: string

  @column()
  declare editionYear: number

  @column()
  declare imagePath: string

  @hasOne(() => Category)
  declare category: HasOne<typeof Category>

  @hasOne(() => Writer)
  declare writer: HasOne<typeof Writer>

  @hasOne(() => User)
  declare user: HasOne<typeof User>

}