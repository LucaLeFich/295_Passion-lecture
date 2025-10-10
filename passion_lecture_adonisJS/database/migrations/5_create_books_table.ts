import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.integer('number_of_page').notNullable()
      table.string('pdf_link').notNullable()
      table.text('abstract').notNullable()
      table.string('editor').notNullable()
      table.integer('edition_year').notNullable()
      table.string('image_path').notNullable()
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        //.onDelete('CASCADE')

      table.integer('writer_id').unsigned().references('id').inTable('writers').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')

       table
       .integer('user_id')
       .unsigned()
       .references('id')
       .inTable('users')
       //.onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
