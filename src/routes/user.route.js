
const express = require('express')
const controller = require('../controllers/user.controller')
const router = express.Router()
const { auth, checkId } = require('../middlewares/authVerify')

// router.get('/', controller.getAll)
// router.post('/', controller.insert)
router.get('/:id', auth, checkId, controller.getByID)
router.put('/:id', auth, checkId, controller.changeUserInfo)
router.put('/change_password/:id', auth, checkId, controller.checkPassword, controller.changePassword)
// router.delete('/:id', controller.delete)

module.exports = router
