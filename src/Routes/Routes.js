const userController = require('../controller/userController')
const express = require('express')
const router = express.Router()

router.get('/usuario', userController.validateUser)


module.exports = router