const { compose, head, prop } = require('ramda')

const getAll = prop('rows')

const getFirst = compose(head)

module.exports = {
  getFirst,
  getAll
}
