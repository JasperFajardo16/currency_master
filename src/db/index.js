// FIXME initialize your database here
// See branches of repo for different skeletons for differing datasources

const mongoose = require('mongoose')
const Promise = require('bluebird')

const connect = async () => {
  const connectUri = process.env.DATABASE_CONNECTION_STRING

  if (!connectUri) {
    console.log(
      'fatal',
      'DATABASE_CONNECTION_STRING must be set'
    )
    process.exit(1)
  }

  mongoose.Promise = Promise
  let connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  console.log(
    'info',
    'Connecting to mongoose database %s and options %o ...',
    connectUri,
    connectOptions
  )

  await mongoose.connect(
    connectUri,
    connectOptions
  )

  console.log('info', 'Connected to mongo successfully')

  mongoose.connection.on('error', error => {
    console.log('error', 'Mongoose connection error %o', error)
  })
}
module.exports = {
  connect
}