
const currencyService = require('../services/currencyService')
const Joi = require('joi')
const validateCurrency = require('./../validations/currency.validation')

let getCurrency = async  (req, res) => {
  const data = await currencyService.getCurrency()

  return res.json(data)
}

let createCurrency = async  (req, res) => {
  const data = await currencyService.createCurrency(req.body)

  if (data.code == 400) {
    return res.status(400).json({status: 400, message: data.message})
  }
  return res.json(data)
}

let updateCurrency = async  (req, res) => {
  const id = req.params.id
  const rate = req.body.rate
  const data = await currencyService.updateCurrency(id, rate)
  
  return res.json(data)
}

let deleteCurrency = async  (req, res) => {
  const id = req.params.id
  const data = await currencyService.deleteCurrency(id)
  
  return res.json(data)
}

module.exports = {
    getCurrency,
    createCurrency,
    updateCurrency,
    deleteCurrency
}
