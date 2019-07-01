const router = require('express').Router()
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const transaction = require('./transaction')

router.use('/',user)
router.use('/products',product)
router.use('/carts',cart)
router.use('/transactions',transaction)

module.exports = router