const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const encyptPassword = async password => {
  const salt = await bcrypt.genSalt(10)
  const encrypedPassword = await bcrypt.hash(password, salt)

  return encrypedPassword
}

const getSignedJwdToken = id => {
  const { JWT_EXPIRE, JWT_SECRET } = process.env

  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE
  })
}

const matchPassword = async (password, enteredPassword) => {
  const { JWT_EXPIRE, JWT_SECRET } = process.env

  return await bcrypt.compare(enteredPassword, password)
}

module.exports = {
  encyptPassword,
  getSignedJwdToken,
  matchPassword
}
