const express = require('express')
const router = express.Router()
const Country = require('../models/Country')

router.get('/', (req, res, next) => {

    Country.find()
    .then(countries => {
        res.json({
            confirmation: 'success',
            data: countries
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'FAIL',
            message: err.message
        })
    })
})

module.exports = router