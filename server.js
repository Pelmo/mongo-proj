const express = require('express')
const mongoose = require('mongoose')

// connect to our Mongo DB:
// use object containing { useNewUrlParser: true, useUnifiedTopology: true}
// as a parameter to remove deprecation warning
mongoose.connect('mongodb://localhost/world', { useNewUrlParser: true, useUnifiedTopology: true} )
.then(data => {
    console.log('Mongo DB conncetion success!')
})
.catch(err => {
    console.log('Mongo DB conncetion failed: ' + err.message)
})


const app = express()

//use these middleware settings when you put your routes in other files
const cities = require('./routes/cities')
const countries = require('./routes/countries')

app.use('/cities', cities)
app.use('/countries', countries)

app.listen(5000)
console.log('App running http://localhost:5000')