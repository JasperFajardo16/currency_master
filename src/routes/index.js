const express = require('express')
const currencyController = require('../controllers/currencyController')

let router = express.Router()


router.route('/currency')
.get(currencyController.getCurrency)
.post(currencyController.createCurrency)

router.route('/currency/:id')
.put(currencyController.updateCurrency)
.delete(currencyController.deleteCurrency)


module.exports = router
