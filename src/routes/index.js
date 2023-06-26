const express = require('express')
const currencyController = require('../controllers/currencyController')

let router = express.Router()


router.route('/currency')
.get(currencyController.getCurrency)
.post(currencyController.createCurrency)
.put(currencyController.updateCurrency)
.delete(currencyController.deleteCurrency)


module.exports = router
