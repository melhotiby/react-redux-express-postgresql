const express = require('express')
const { register, login, me } = require('../controllers/auth')
const { protect } = require('../middleware')

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/me').get(protect, me)

module.exports = router
