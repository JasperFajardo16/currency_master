const Joi = require('joi');

let validateCurrency = 
 Joi.object({
    country: Joi.string().required(),
    code: Joi.string().required(),
    rate: Joi.number().integer(),
  })



module.exports = {
    validateCurrency
};
