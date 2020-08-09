const express = require('express')
const mongoose = require('mongoose')
const City = require('./models/City')
const Country = require('./models/Country')
// connect to our Mongo DB:
// use object containing { useNewUrlParser: true, useUnifiedTopology: true}
// as a parameter to remove deprecation warning
mongoose.connect('mongodb://localhost/world', { useNewUrlParser: true, useUnifiedTopology: true}, )
.then(data => {
    console.log('Mongo DB conncetion success!')
})
.catch(err => {
    console.log('Mongo DB conncetion failed: ' + err.message)
})

const app = express()

app.get('/', (req, res, next) => {
    res.json({
        confirmation: 'success',
        data: 'This is the Mongo project!'
    })
})

app.get('/cities', (req, res, next) => {

    City.find(null)
    .then(cities => {
        res.json({
            confirmation: 'success',
            data: cities
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

app.get('/countries', (req, res, next) => {

    Country.find(null)
    .then(countries => {
        res.json({
            confirmation: 'success',
            data: countries
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

app.listen(5000)
console.log('App running http://localhost:5000')