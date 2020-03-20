const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('<h2>ALOOO</h2>')
})

module.exports = router