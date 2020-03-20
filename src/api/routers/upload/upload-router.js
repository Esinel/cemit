const express = require('express')
const router = express.Router()
const csvParser = require('../../services/csv-parser')
const path = require('path')
const fileUpload = require('express-fileupload')

// use fileupload middleware
router.use(fileUpload())

// * GET *
router.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '../../../../static/file-form.html')))

// * POST *
router.post('/', (req, res) => {
    console.log('Pogodio si post')
    const csvFile = req.files.csv_file
    console.log(csvFile)
    csvParser.parseCsvFile(csvFile)
})


module.exports = router;