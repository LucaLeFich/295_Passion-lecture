import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Category from './category.js'
import Writer from './writer.js'
import User from './user.js'
import Comment from './comment.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Evaluate from './evaluate.js'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

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

  @column()
  declare categoryId: number

  @column()
  declare writerId: number

  @column()
  declare userId: number

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @belongsTo(() => Writer)
  declare writer: BelongsTo<typeof Writer>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany (()=> Comment)
  declare comment: HasMany<typeof Comment>

  @hasMany (()=> Evaluate)
  declare evaluate: HasMany<typeof Evaluate>
}
