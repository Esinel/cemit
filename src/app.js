const express = require('express')
const app = express() 
const port = process.env.PORT || 5000
const databaseConnector = require('./database/db-connector')
const path = require('path')

// * API routes *
const api = require('./api/index') 
app.use('/api', api)

// *  /api  *
app.get('/', (req,res) => res.sendFile(path.resolve(__dirname + '/static/welcome.html')))


app.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
    databaseConnector.connectToDatabase()
})



