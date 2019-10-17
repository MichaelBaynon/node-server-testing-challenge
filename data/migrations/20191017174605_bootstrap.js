
exports.up = function(knex) {
    return knex.schema.createTable('weapons', weapons => {
        weapons.increments('')

        weapons.string('weapon', 24)
        .notNullable()
        .unique()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('weapons')
};
