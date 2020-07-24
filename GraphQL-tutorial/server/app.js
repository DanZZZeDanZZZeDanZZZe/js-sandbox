const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('../schema/schema')
const {connect, connection} = require('mongoose')
const config = require('config');
const {username, password, dbName} = config.get('dbConfig');

const app = express()
const PORT = 3005

connect(
  `mongodb+srv://${username}:${password}@cluster0.xhwza.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
)

connection.on('error', err => console.log(`Connection error: ${err}`))
connection.once('open', () => console.log(`Connected to DB`))


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(PORT, err => {
  err ? console.log(error) : console.log('Server started!')
})