const { compose, head, prop } = require('ramda')

const getAll = prop('rows')

const getFirst = compose(
  head,
  getAll
)

module.exports = {
  getFirst,
  getAll
}
