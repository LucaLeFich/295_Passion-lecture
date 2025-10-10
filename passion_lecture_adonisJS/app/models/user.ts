import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Book from './book.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare idUser: number

  @column()
  declare username: string | null

  @column({ serializeAs: null })
  declare hashPassword: string

  @column()
  declare isAdmin: boolean

  @column()
  declare creationDate: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => Book)
  declare book: HasMany<typeof Book>

  // @hasMany(( => Comments))
  // declare comment: HasMany<typeof Comment>

  // @hasMany(( => Evaluate))
  // declare evaluate: HasMany<typeof Evaluate>
}
