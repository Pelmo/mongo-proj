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
        res.json({
            confirmation: 'success',
            data: result
        })
    }   catch (error) {
        
        return next(error)
    }
})

router.get('/add', (req, res, next) => {
    const details = req.query
    res.json ({
        confirmation: 'success',
        data: details
    })
})


router.get('/:id', async(req, res, next) => {
    try {
        const result = await City.findById(req.params.id)
        res.json({
            confirmation: 'success',
            data: result
        })
    }   catch (error) {
        res.json({
            confirmation: 'success',
            message: 'City ' + req.params.id + ' not found'
        })
    }
})
module.exports = router