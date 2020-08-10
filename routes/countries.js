const express = require('express')
const router = express.Router()
const Country = require('../models/Country')

// router.get('/', (req, res, next) => {

//     Country.find()
//     .then(countries => {
//         res.json({
//             confirmation: 'success',
//             data: countries
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
        // use /countries?continent=X to replace 
        const query = req.query

        const result = await Country.find({continent:'asia'})
        res.json({
            confirmation: 'success',
            data: result
        })
    }   catch (error) {
        //I THINK this means pass the error to the next middleware
        //which there is a default handler for it but we can make a custom one
        //we will probably learn about custom ones later!
        return next(error)
    }
})

// router.get('/', async(req, res, next) => {
//     try {
//         // use parameters in the form of: 
//         // '/countries?continent=X' in the URL to change database query
//         // to do a space in a URL use '+' or '%20'
//         const query = req.query

//         const result = await Country.find(query)
//         res.json({
//             confirmation: 'success',
//             data: result
//         })
//     }   catch (error) {
        
//         return next(error)
//     }
// })

router.get('/add', async(req, res, next) => {
    try {

        const details = req.query
        const result = await Country.create(details)
        res.json ({
            confirmation: 'success',
            data: result
        })
    } catch (error) {

        res.json({
            confirmation: 'fail',
            message: error.message
        })
    }
})

router.get('/update/:id', async(req, res, next) => {
    try {

        const updatedDetails = req.query
        const countryId = req.params.id
        // The {new:true} tells mongoose to return the country AFTER the changes
        // are applied. (default returns BEFORE)
        const result = await Country.findByIdAndUpdate(countryId,  updatedDetails, {new:true})
        res.json ({
            confirmation: 'success',
            data: result
        })
    } catch (error) {

        res.json({
            confirmation: 'fail',
            message: error.message
        })
    }
})

module.exports = router