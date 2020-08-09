const express = require('express')
const mongoose = require('mongoose')

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

app.use('/', (req, res, next) => {
    res.json({
        confirmation: 'success',
        data: 'This is the Mongo project!'
    })
})

app.listen(5000)
console.log('App running http://localhost:5000')