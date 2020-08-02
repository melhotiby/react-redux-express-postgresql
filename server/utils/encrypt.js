const bcrypt = require('bcryptjs')

const encyptPassword = async password => {
  const salt = await bcrypt.genSalt(10)
  const encrypedPassword = await bcrypt.hash(password, salt)

  return encrypedPassword
}

module.exports = encyptPassword
