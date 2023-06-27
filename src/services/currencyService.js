const {MongoClient, ObjectId} = require('mongodb');
const Joi = require('joi')
const validateCurrency = require('./../validations/currency.validation')


const client = new MongoClient(process.env.DATABASE_CONNECTION_STRING);

let getCurrency = async () => {
    try {
      const result = await client.db("currency_db").collection("currency").find({}).toArray(function(err, result) {
          if (err) throw err;
          client.close();
          });
      return result
    } catch(e) {
      throw new Error(e)
    }

}

let createCurrency = async (payload) => {
  try {
    const checkCurrency = await client.db("currency_db").collection("currency").findOne({code: payload.code })
    if (checkCurrency) {
       throw new Error(`Code ${payload.code} is already created`)
    }
    const validate = validateCurrency.validateCurrency.validate(payload)
    const { error } = validate; 
    const valid = error == null;
    let result;
    if (!valid) { 
      result = { 
        message: 'Invalid request', 
        data: payload
      }
    } else { 
      await client.db("currency_db").collection("currency").insertOne(payload);
      result = { message: 'Currency Created' }
    } 
  
    return result
  } catch(e) {
    console.log(e)
    return {
      code: 400,
      message: `${e}`
    }
  }
}

let updateCurrency = async (id, rate) => {
  try {
    await client.db("currency_db").collection("currency").updateOne({_id: new ObjectId(id)}, { $set:{ rate: rate } }, function(err, res) {
      if (err) throw err;
      client.close();
    });
    return {
      message: 'Currency has been updated'
    }
  } catch(e) {
    throw new Error(e)
  }
 
}

let deleteCurrency = async (id) => {
  try {
    await client.db("currency_db").collection("currency").deleteOne({_id: new ObjectId(id)});
    return {
      message: 'Currency has been deleted'
    }
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
    getCurrency,
    createCurrency,
    updateCurrency,
    deleteCurrency
}