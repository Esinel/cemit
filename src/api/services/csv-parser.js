const parse = require('csv-parse')

module.exports = {

    parseCsvFile: (csvFile) => {
        parse(csvFile, (err, output) => {
            console.log(output)
        })
    }
}