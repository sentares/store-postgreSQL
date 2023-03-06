const Router = require('express')
const TypeController = require('../controllers/type.controller')
const router = new Router()

router.post('/', TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router
