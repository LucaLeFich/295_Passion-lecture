import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'
  // TODO: refaire migrations
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('username').nullable()
      table.string('password').notNullable()
      table.boolean('is_admin').notNullable().defaultTo(false)
      // table.date('creation_date').notNullable().defaultTo(this.now().toSQLDate())

      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
