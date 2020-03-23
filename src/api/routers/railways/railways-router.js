const express = require('express')
const router = module.exports = express.Router()
const databaseConnector = require('../../../database/db-connector')

// * GET ALL *
router.get('/', (req, res) => {
    databaseConnector.getDatabase().collection('norweigan_trains_dataset').find().toArray( (err, result) => {
        if (err) throw err

        console.log(result)
        res.send(result)
    }) 
})

// * GET BY ID & QUERY *
router.get('/:railwayId', (req, res) => {

    // Path param
    const railwayId = req.params.railwayId.toUpperCase() // since all url queries are lowercase

    // Query/Filter params
    const queryParams = req.query

    const year = queryParams['year'] // TODO: convert year to dateFrom - dateTo
    const workorderId = queryParams['workorder-id']
    const workorderStatus = queryParams['workorder-status']
    const thresholdStatus = queryParams['threshold-status']
    const deviationType = queryParams['deviation-type']
    
    // Query construction
    let query = {};

    if (railwayId !== undefined) query['track'] = {$regex: railwayId + ".*"}
    if (year !== undefined) query['time aquired'] = {$regex: ".*" + year + ".*"}
    if (deviationType !== undefined) query['type'] = {$regex: ".*" + deviationType + ".*"}
    if (workorderId !== undefined) query['workorder id'] = workorderId
    if (thresholdStatus !== undefined) query['threshold status'] = thresholdStatus
    if (workorderStatus !== undefined) query['status'] = workorderStatus


    console.log(query)

    databaseConnector.getDatabase().collection('norweigan_trains_dataset') // get all the data based on railway ID (K01, K08 etc...)
        .find(query)
        .toArray( (err, result) => {
            if (err) throw err

            res.send(result)
        })
})




// * POST *

// * UPDATE *

// * DELETE *