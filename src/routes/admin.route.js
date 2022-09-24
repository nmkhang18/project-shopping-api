
const express = require('express')
const controller = require('../controllers/admin.controller')
const router = express.Router()

//user
router.get('users-managerment', controller.getAllUsers)
//product
router.post('/product', controller.createProduct)
router.put('/product/:id', controller.changeProductInfo)
//cate
router.post('/category', controller.createCategory)
router.delete('/category/:id', controller.deleteCategory)
//supplier
router.post('/supplier', controller.createSupplier)
router.delete('/supplier/:id', controller.deleteSupplier)

module.exports = router