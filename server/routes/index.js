const Router = require('express')
const router = new Router()

router.use('/user', require('./user.router'))
router.use('/device', require('./device.router'))
router.use('/type', require('./type.router'))
router.use('/brand', require('./brand.router'))

module.exports = router
