
const express = require('express')
const controller = require('../controllers/login.controller')
const router = express.Router()

// router.get('/', controller.getAll)
router.post('/', controller.login)
// router.get('/:id', controller.getByID)
// router.put('/:id', controller.update)
// router.delete('/:id', controller.delete)

module.exports = router
