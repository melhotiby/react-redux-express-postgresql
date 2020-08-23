exports.up = function(knex) {
  return knex.schema.alterTable('users', function(t) {
    t.timestamp('lastLogin')
  })
}

exports.down = function(knex) {
  return knex.schema.table('users', table => {
    table.dropColumn('lastLogin')
  })
}
