const pg = require('pg')
const { identity } = require('ramda')

// Since we set postgres to serialize intervals
// as ISO 8601, the Javascript type `PostgresInterval`
// no longer recieves a "postgres" formatted string &
// cannot parse any values. So we will force the postgres
// driver to keep interval types as strings.

// INTERVAL = 1186
pg.types.setTypeParser(1186, identity)
