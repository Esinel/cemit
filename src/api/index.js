const express = require('express')
const router = express.Router()

// * SUB-ROUTE DECLARATIONS *
const railwaysRouter = require('./routers/railways/railways-router')
const uploadRouter = require('./routers/upload/upload-router')
const halalRouter = require('./routers/halal-router')

 // * ROOT /api *
router.get('/', (req, res) => res.send('CEMIT api root'))


// * SUB-ROUTE USE *
router.use('/railways', railwaysRouter)
router.use('/upload', uploadRouter)

router.use('/halal', halalRouter)

module.exports = router


