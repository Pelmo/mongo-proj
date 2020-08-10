const express = require('express')
const router = express.Router()
const City = require('../models/City')

// router.get('/', (req, res, next) => {
//     City.find()
//     .then(cities => {
//         res.json({
//             confirmation: 'success',
//             data: cities
//         })
//     })
//     .catch(err => {
//         res.json({
//             confirmation: 'FAIL',
//             message: err.message
//         })
//     })
// })

router.get('/', async(req, res, next) => {
    try {
        const result = await City.find()
        res.json(result)
    }   catch (error) {
        
        return next(error)
    }
})

module.exports = router