const {MongoClient, ObjectId} = require('mongodb');


const client = new MongoClient(process.env.DATABASE_CONNECTION_STRING);

let getCurrency = async () => {
    const result = await client.db("currency_db").collection("currency").find({}).toArray(function(err, result) {
        if (err) throw err;
        client.close();
      });
    return result
}

let createCurrency = async (payload) => {
    const result = await client.db("currency_db").collection("currency").insertOne(payload);
    console.log(`New currency created with the following id: ${result.insertedId}`);
}

let updateCurrency = async (payload) => {
    const { id, rate } = payload
    const result = await client.db("currency_db").collection("currency").updateOne({_id: new ObjectId(id)}, { $set:{ rate: rate } }, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        client.close();
      });
    console.log(`Currency has been updated`);
}

let deleteCurrency = async (payload) => {
    const result = await client.db("currency_db").collection("currency").deleteOne(payload);
    console.log(`Currency has been deleted with the following id: ${result.insertedId}`);
}

module.exports = {
    getCurrency,
    createCurrency,
    updateCurrency,
    deleteCurrency
}