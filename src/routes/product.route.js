
const express = require('express')
const controller = require('../controllers/product.controller')
const router = express.Router()

router.get('/', controller.getAll)
// router.post('/', controller)
router.get('/:id', controller.getById)
// router.put('/:id', controller.update)
// router.delete('/:id', controller.delete)

module.exports = router
