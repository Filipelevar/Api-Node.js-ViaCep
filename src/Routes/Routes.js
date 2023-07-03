const userController = require('../controller/userController')
const express = require('express')
const router = express.Router()

router.post('/usuario', userController.validateUser)


module.exports = router