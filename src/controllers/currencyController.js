
const currencyService = require('../services/currencyService')

let getCurrency = async  (req, res) => {
    const data = await currencyService.getCurrency()

    return res.json(data)
}

let createCurrency = async  (req, res) => {
    const data = await currencyService.createCurrency(req.body)
  
    return res.json(data)
  }

  let updateCurrency = async  (req, res) => {
    const data = await currencyService.updateCurrency(req.body)
  
    return res.json(data)
  }

  let deleteCurrency = async  (req, res) => {
    const data = await currencyService.deleteCurrency(req.body)
  
    return res.json(data)
  }

module.exports = {
    getCurrency,
    createCurrency,
    updateCurrency,
    deleteCurrency
}
