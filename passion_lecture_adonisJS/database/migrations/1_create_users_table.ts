import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_user').primary() // correspond à idUser

      table.string('username').nullable()
      table.string('hash_password').notNullable() // correspond à hashPassword
      table.boolean('is_admin').notNullable().defaultTo(false)
      table.date('creation_date').notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
