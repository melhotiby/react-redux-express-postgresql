const { compose, head, prop } = require('ramda')

const getFirst = compose(
  head,
  prop('rows')
)

module.exports = {
  getFirst
}
