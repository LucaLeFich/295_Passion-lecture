import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
 
export default class Bookepub extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
 
  @column()
  declare name: string
 
  @column()
  declare content: Buffer  // LONGBLOB → Buffer en TypeScript
 
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
 
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}