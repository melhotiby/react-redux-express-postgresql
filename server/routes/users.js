const express = require('express')
const { getUsers } = require('../controllers/users')

const router = express.Router()

router.route('/').get(getUsers)

module.exports = router
