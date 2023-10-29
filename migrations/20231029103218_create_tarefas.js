
const tableName = "tasks"

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable(tableName, (table) => {
        table.increments('id')
        table.string('name', 255).notNullable()
        table.boolean('done')
        table.datetime('done_date')
        table.integer('id_user').notNullable()
        table.foreign('id_user')
            .references('id')
            .inTable('users')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable(tableName)
};
