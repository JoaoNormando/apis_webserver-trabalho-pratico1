const tableName = "users"

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments('id')
        table.string('name', 255).notNullable()
        table.string('password', 255).notNullable()
        table.string('username', 100).notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable(tableName)
};
