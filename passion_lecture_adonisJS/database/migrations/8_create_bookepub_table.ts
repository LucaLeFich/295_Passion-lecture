import { BaseSchema } from '@adonisjs/lucid/schema'
 
export default class extends BaseSchema {
  protected tableName = 'bookepubs'
 
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      // LONGBLOB pour stocker des fichiers > 64 Ko
      table.specificType('content', 'LONGBLOB').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }
 
  async down() {
    this.schema.dropTable(this.tableName)
  }
}