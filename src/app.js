const express = require('express')
const app = express() 
const port = process.env.PORT || 5000
const databaseConnector = require('./database/db-connector')
const fileUpload = require('express-fileupload') 


// * API routes *
const api = require('./api/index') 
app.use('/api', api)

// *  /api  *
app.get('/', (req,res) => res.send('Hello there my wizzard!'))


app.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
    databaseConnector.connectToDatabase()
})



