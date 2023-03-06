const Router = require('express')
const DeviceController = require('../controllers/device.controller')
const router = new Router()

router.get('/getAll', DeviceController.getAll)
router.get('/getOne', DeviceController.getOne)
router.post('/', DeviceController.create)

module.exports = router
